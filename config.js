require("dotenv").config()


let HEADERS = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'x-coursera-application': 'ondemand',
    'x-coursera-version': 'cde5f24972aff1ebd6447e911113e781b9c52f7f',
    'x-requested-with': 'XMLHttpRequest',
    'content-type': 'application/json; charset=UTF-8', 

}

let COOKIES = {'__204u':'7306511248-1701275072616','__204r':'https%3A%2F%2Fwww.google.com%2F','_ga':'GA1.1.777251917.1701275077','usprivacy':'1---','_fbp':'fb.1.1701275084961.1894765776','IR_PI':'b7557aab-8ed3-11ee-a072-29e336d79039%7C1701361482054','FPID':'FPID2.2.jCdKhsjOsZ5ghEAmyTItJqU0FXti1e2%2BC24Qha7l8c0%3D.1701275077','OneTrustWPCCPAGoogleOptOut':'false','_gcl_au':'1.1.917081192.1709312247','_gcl_aw':'GCL.1712078147.Cj0KCQjw2a6wBhCVARIsABPeH1vPTiZt5bLEcJuPeUCmjbOodIciRiyQuITx5DlAIipENwJs-hbFto0aAvvkEALw_wcB','CSRF3-Token':'1712943481.qjKQWLH9u5EmvVUA','post-tv-survey-in-sep-2021':'true','FPLC':'fSVplsDqABK22PAuAnpA%2FvSzEDCOz70TSCLNgcLo5UWOQCb1Hu0UJaOMxMPSkEgS%2FO5J2bIKjbXhktRCT%2BfF9wYIG7QT%2BYMR0k0cGewGxKmOoCgVn%2BNBCSeece0YFA%3D%3D','CAUTH':'rH-y95uXJfgFsoI9hzZh3wPGs35n4I5t-OAWmYHBvYsIj4Nl2MmXehDNyewoxEsZON1BWLDS6mSJ6_N4ZJl6Og.2PxubcP3QJfWY_dcOOjBrA.7YxZyb7gWfKsf0Mjgq4qra0FS6bNzsqOX8E5lkJZprVz5j1NtiiYrTlmyq8mjrwpDZZEyG4qKUZ9rYXitCqp7wj6sdRdXpqoARd9wQ-GCnybeXh4JUjWC0D_BJ_VZQ8xqA6s7OOfBR94lPivvY5AE7iBj8-n_qRni7WchwowIGBuXxv4FzeJFAOKh1pzngSr1-Icv7YWOem5syT-UohM0ZejjIvm36-0GkVjXhTnouye3nDB1mWwsr-znm2LcVu0ClDVcPMmZn0SI8hxSTwRHl4ldqV5vWxqvRevrEOqkgt02mko07EMFI5dyll1pSAIsFax3jBevGvrsm7IpWma4Hm_SFxr7KVHpDpisav5qgnw6dQOWABt1tT7KJn2P_xRUdkmrPFRLuYOtcctfBV_OmFdIiNEK0mEeACzKpb-GWOB7N2bF5OnHKH7te_N3k1O','__400r':'https%3A%2F%2Fwww.google.com%2F','__400v':'49d2d120-95ab-4c79-a224-cbbbc2d5720e','IR_gbd':'coursera.org','OptanonConsent':'isGpcEnabled=0&datestamp=Thu+Apr+04+2024+22%3A37%3A57+GMT%2B0530+(India+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0004%3A1%2CC0002%3A1%2CC0003%3A1&AwaitingReconsent=false&geolocation=IN%3BPB','OptanonAlertBoxClosed':'2024-04-04T17:07:57.812Z','_tq_id.TV-63455409-1.39ed':'a893a8a022f76381.1701275086.0.1712250478..','_rdt_uuid':'1701275083875.3e328a40-04d8-4e6f-b695-438103be7d6d','_uetsid':'65c93be0f28c11ee88cd8575607b9aeb|rovr7t|2|fkn|0|1555','_uetvid':'cdf508008ed311eeb25f7b2b7a12e272|1onslpk|1712250467625|11|1|bat.bing.com/p/insights/c/d','_ga_7GZ59JSFWQ':'GS1.1.1712250070.24.1.1712250480.0.0.1529941141','_ga_ZCE2Q9YZ3F':'GS1.1.1712250065.24.1.1712250489.11.0.0','IR_14726':'1712250489509%7C0%7C1712250489509%7C%7C','csrftoken':'S4xHzN0XHAQrUCNvusLKfNnX','csrf2_token_5H6wa5dB':'7NSONtMcLFkZg9eMRUu5egQK','__400vt':'1712250490327'}
let BASE_URL = 'https://www.coursera.org/api/'

let EMAIL = process.env.EMAIL
let PASSWORD = process.env.PASSWORD

module.exports={HEADERS,COOKIES,BASE_URL,EMAIL,PASSWORD}


// node .\index.js introduction-to-android-mobile-application-development