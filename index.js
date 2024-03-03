const axios = require('axios');
const {HEADERS,COOKIES,BASE_URL,EMAIL,PASSWORD} = require('./config'); // Assuming config.js is present in the same directory
const { createLogger, transports } = require('winston');
const { combine, timestamp, printf } = require('winston').format;
const { program } = require('commander');
const loggerFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(timestamp(), loggerFormat),
    transports: [new transports.Console()]
});


class Skipera {
    constructor(course) {
        this.base_url = BASE_URL;
        this.session = axios.create({
            headers: {
                ...HEADERS,
                Cookie: Object.keys(COOKIES).map(key => `${key}=${COOKIES[key]}`).join("; ")
            },
            withCredentials: true
        });
        this.course = course;
        this.user_id = null;
        this.course_id=null;
        if (!this.get_userid()) {
            this.login(); 
        }
    }

    async login() {
        logger.info("Trying to log in using credentials");
        try {
            const response = await this.session.post(this.base_url + "login/v3", {
                code: "",
                email: EMAIL,
                password: PASSWORD,
                webrequest: true,
            });
            logger.info(response.data);
        } catch (error) {
            logger.error(error.message);
        }
    }

    async get_userid() {
        try {
            const response = await this.session.get(this.base_url + "adminUserPermissions.v1?q=my");
            this.user_id = response.data.elements[0].id;
            logger.info("User ID: " + this.user_id);
            return true;
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errorCode) {
                logger.error("Error Encountered: " + error.response.data.errorCode);
            }
            return false;
        }
    }

    async get_modules() {
        try {
            const response = await this.session.get(this.base_url + `onDemandCourseMaterials.v2/?q=slug&slug=${this.course}&includes=modules`);
            this.course_id = response.data.elements[0].id;
            logger.info("Course ID: " + this.course_id);
            logger.info("Number of Modules: " + response.data.linked["onDemandCourseMaterialModules.v1"].length);
            response.data.linked["onDemandCourseMaterialModules.v1"].forEach(module => {
                logger.info(module.name + " -- " + module.id);
            });
        } catch (error) {
            logger.error(error.message);
        }
    }

    async get_items() {
        try {
            // this is bringing course material for us
            const response = await this.session.get(this.base_url + "onDemandCourseMaterials.v2/", {
                params: {
                    q: "slug",
                    slug: this.course,
                    includes: "passableItemGroups,passableItemGroupChoices,items,tracks,gradePolicy,gradingParameters",
                    fields: "onDemandCourseMaterialItems.v2(name,slug,timeCommitment,trackId)",
                    showLockedItems: "true"
                }
            });
            response.data.linked["onDemandCourseMaterialItems.v2"].forEach(video => {
                    logger.info("Watching " + video.name + " ID:- "+ video.id);
                    this.watch_item(video.id);
                });
            } catch (error) {
                logger.error(error.message);
            }
        }

    async watch_item(item_id) {
    try {
        const response = await this.session.post(this.base_url + `opencourse.v1/user/${this.user_id}/course/${this.course}/item/${item_id}/lecture/videoEvents/ended?autoEnroll=false`,{
            "contentRequestBody": {}
        });
    } catch (error) {
            logger.info("Not a watch item! Reading..");
            this.read_item(item_id);
        }
    }

    async read_item(item_id) {
        try {
            const response = await this.session.post(this.base_url + "onDemandSupplementCompletions.v1", JSON.stringify({
                courseId: this.course_id,
                itemId: item_id,
                userId: parseInt(this.user_id)
            }));
        } catch (error) {
            logger.error("Item is a survey! Please complete it manually!");
            logger.error("Or some error occured!")
        }
    }
}

    program
        .arguments('<course>')
        .action(async (course) => {
            try {
                const skipera = new Skipera(course);
                await skipera.get_modules();
                await skipera.get_items();
            } catch (error) {
                logger.error(error.message);
            }
        });

    program.parse(process.argv);

    if (!process.argv.slice(2).length) {
        program.outputHelp();
    }
