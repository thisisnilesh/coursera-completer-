require("dotenv").config()


let HEADERS = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'x-coursera-application': 'ondemand',
    'x-coursera-version': 'cde5f24972aff1ebd6447e911113e781b9c52f7f',
    'x-requested-with': 'XMLHttpRequest',
}

let COOKIES = {
    // add your cookies here
}
let BASE_URL = 'https://www.coursera.org/api/'

let EMAIL = process.env.EMAIL
let PASSWORD = process.env.PASSWORD

module.exports={HEADERS,COOKIES,BASE_URL,EMAIL,PASSWORD}