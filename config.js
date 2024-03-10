require("dotenv").config()


let HEADERS = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'x-coursera-application': 'ondemand',
    'x-coursera-version': 'cde5f24972aff1ebd6447e911113e781b9c52f7f',
    'x-requested-with': 'XMLHttpRequest',
    'content-type': 'application/json; charset=UTF-8', 

}

let COOKIES = {'__204u':'9373085229-1706640616279','usprivacy':'1---','_ga':'GA1.1.1100585509.1706640624','_gcl_au':'1.1.1262788807.1706640624','_fbp':'fb.1.1706640624606.374500481','FPID':'FPID2.2.wS3GM9YjiJTbfL1ylNKXKG%2Fccx1PewJIA7yaEoeAmSw%3D.1706640624','OneTrustWPCCPAGoogleOptOut':'false','IR_PI':'2fabb9ff-bfa0-11ee-8316-e77f707f7093%7C1706727315542','g_state':'{\'i_p\':1709492469181,\'i_l\':1}','_gcl_aw':'GCL.1709669655.CjwKCAiAopuvBhBCEiwAm8jaMQOSIQyqZOIMQjE5emPUeXvmjz7GcRbnJIBjRywB5hAroTcICH9zhRoCutAQAvD_BwE','FPLC':'bNdBfQtYlBduzcIatKWAQArkLTV0hSqfKzcFzvGMyaSPx9ZGvC%2BktQsYRNyinGjCjw6%2F%2Bj2cQ%2BihNasmUIcR3HXOv4Ieo9UGaDlw5F7Xr61Z6C9jpL3YJR1dABGRfw%3D%3D','IR_gbd':'coursera.org','CSRF3-Token':'1710911266.rE5xNIhhiT9ADQtW','CAUTH':'EuFrHiTDS4lymL7JdC-JfI0mdkkeSDLaaftw5HoAXU0iOKlLsG8lPIXhFL4Fkb1ELWEitpxSqVRbYucCyD1Dvg.FF4Smwl8ljCDA1D3cLN-Bg.aZYqXfB2h5QnmGxasGFNsE4_bf_hZxD5dsf-DKoYQzGAGI0D9Gap-p0jW1UbQCuzBba8s6LnoMZKU175Jlv4Gnf3rReNOs9gN6is-Sx4shH7UQ6c9FIU6WhKLCFziR_sCv6R3Il7x0OqChRgWYBCnFvnLU3aJhTaISa-NYvifp3Op1A8FqusnSCtNE6UzZXQndxs_tixBMCX-W2dLX7b5BEfIkLRRMPNW3DcWVHaspODR06YFlZGFG_52J6U6HMuzwr9a3FRqjdsP591LR3ZkKlqxgp8-PeBJQISzfEQJ8_rYgWakAIbraOUx3yzPvD1dphXYdKKC4aP9aI5XlV1BvmrZhTeZ4trNiqTanQmCFuSXZx8kt659lMZYIW7mWCMTb3P2kIpMeJPzsauDUoJExTLX7rO72VmrHmXE0blzVjDToFrLOZ49iw7DcekxQwL','profileconsent':'eyIxMTQ4NjI5NjMiOnsiY2NwYVJlcXVpcmVkIjpmYWxzZSwiZ2RwclJlcXVpcmVkIjpmYWxzZX19','IR_14726':'1710054342676%7C0%7C1710054342676%7C%7C','OptanonConsent':'isGpcEnabled=0&datestamp=Sun+Mar+10+2024+12%3A35%3A43+GMT%2B0530+(India+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0004%3A1%2CC0002%3A1%2CC0003%3A1&AwaitingReconsent=false&geolocation=IN%3BPB','OptanonAlertBoxClosed':'2024-03-10T07:05:43.465Z','_tq_id.TV-63455409-1.39ed':'a50915608b782737.1706640626.0.1710054344..','_rdt_uuid':'1706640624683.b1533fdd-ad12-453d-a1bb-43b6cb8bb2bb','_uetsid':'d069ddd0de3511eeb65f055e8c384110|byohgu|2|fjy|0|1529','_ga_ZCE2Q9YZ3F':'GS1.1.1710053332.14.1.1710054353.20.0.0','_ga_7GZ59JSFWQ':'GS1.1.1710053333.14.1.1710054354.0.0.0','_uetvid':'6d765a60bfa011eeb24b2395151423fb|4y5tu9|1710060665214|1|1|bat.bing.com/p/insights/c/d','__400v':'c513a485-e7df-474f-afa3-8f4fab38c398','csrftoken':'TluSW9luWR7ajkDHHbFb5Cgc','csrf2_token_UvTfE6JM':'OxiFsHH4VVM3j5lRxQOXGoti','__400vt':'1710060734661'}


let BASE_URL = 'https://www.coursera.org/api/'

let EMAIL = process.env.EMAIL
let PASSWORD = process.env.PASSWORD

module.exports={HEADERS,COOKIES,BASE_URL,EMAIL,PASSWORD}