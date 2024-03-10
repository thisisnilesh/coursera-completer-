const myHeaders = new Headers();
myHeaders.append("authority", "www.coursera.org");
myHeaders.append("accept", "*/*");
myHeaders.append("accept-language", "en");
myHeaders.append("content-type", "application/json; charset=UTF-8");
myHeaders.append("cookie", "__204u=9373085229-1706640616279; usprivacy=1---; _ga=GA1.1.1100585509.1706640624; _gcl_au=1.1.1262788807.1706640624; _fbp=fb.1.1706640624606.374500481; FPID=FPID2.2.wS3GM9YjiJTbfL1ylNKXKG%2Fccx1PewJIA7yaEoeAmSw%3D.1706640624; OneTrustWPCCPAGoogleOptOut=false; IR_PI=2fabb9ff-bfa0-11ee-8316-e77f707f7093%7C1706727315542; g_state={\"i_p\":1709492469181,\"i_l\":1}; CSRF3-Token=1710533627.pfIzyYOxQKUs34fW; CAUTH=PODjSGUsQSRdWRJiWUZKr6TVjpojxZcbktFhVIjUejA-PMhLUfTfTG2HNlchDcjtYKQDu9FuQlu08XtGdA9SeA.35KoETllHMpx16AtzuTCYw.-VA4uI-G2USwcenB8f8z6vRLw2WSPJLbIzhD9MvYCMZQczfcwhbvfqyFLc5RDdlJon0f4S21fjAfxCddjljzf0EgD_DgWXfVEB_2G9YHzGxNiIz6wEM50wUUBOUDugFsh1GAJMuHfeO9mhUFBHvhb1G4nb1MeTpv4H_WPTDSzNv7ZFyvA6VwxFhiThhNNZG5V5MIVUFffWzXL3K8I5vsguJWoaFxppXiEegpTC_474dDwgBHFS5jWdl9jk8SqJfDZZMV1_mHvuLF7G6v5bbVXlhW4dzZACuu2sTdJz0NKEik61r-gGMfzSCdrVRk4SFCkvESfIJXT4RHgx2RaZLynYhQ8nUAZHxNpi7yeaEXI7l_JL4oQpts0TbJV9M0RAiaZuA0hUN-oAhTyo1B_uMtqVfxoUn6QB9iQBUWEKNXbIrvHb1VccfJ_wVHCgM-4F1-; _gcl_aw=GCL.1709669655.CjwKCAiAopuvBhBCEiwAm8jaMQOSIQyqZOIMQjE5emPUeXvmjz7GcRbnJIBjRywB5hAroTcICH9zhRoCutAQAvD_BwE; IR_gbd=coursera.org; FPLC=sKtkwJwTD9xWAHAWuPT4Z1kYvPWN%2F8NaQo7o%2BXO20KduBx4InpFgCC8cvCEkzjIMKWvaZMsmtrIG%2Fcx%2B0FgchzbMqSKrkJQLTjoVMravD0duFZYC32tZ6LOP0ijRcw%3D%3D; _ga_ZCE2Q9YZ3F=GS1.1.1709747347.10.1.1709747459.50.0.0; IR_14726=1709747459551%7C0%7C1709747459551%7C%7C; OptanonConsent=isGpcEnabled=0&datestamp=Wed+Mar+06+2024+23%3A20%3A59+GMT%2B0530+(India+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0004%3A1%2CC0002%3A1%2CC0003%3A1&AwaitingReconsent=false&geolocation=IN%3BPB; OptanonAlertBoxClosed=2024-03-06T17:50:59.772Z; _ga_7GZ59JSFWQ=GS1.1.1709747348.10.1.1709747459.0.0.0; _tq_id.TV-63455409-1.39ed=a50915608b782737.1706640626.0.1709747460..; _rdt_uuid=1706640624683.b1533fdd-ad12-453d-a1bb-43b6cb8bb2bb; _uetsid=d998a7c0db2c11ee9d2eb35b13f61dff|1n8j6d3|2|fju|0|1525; _uetvid=6d765a60bfa011eeb24b2395151423fb|ghnyt1|1709747461181|3|1|bat.bing.com/p/insights/c/p; __400v=54d3cc47-d05e-483b-b4a0-e46d9b19f7a5; __400vt=1709756048108; csrftoken=jajf3lvQwwxWku1VUqgdUHBH; csrf2_token_EEEFW7Al=y9INasxFJiLoIjxFpI0At5Sm; CSRF3-Token=1710079886.FmfdVdGvRCdskQRL; __204u=5444465596-1709215886440");
myHeaders.append("origin", "https://www.coursera.org");
myHeaders.append("referer", "https://www.coursera.org/learn/generative-ai-with-llms/supplement/Qo3gK/important-have-questions-issues-or-ideas-join-our-forum");
myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "same-origin");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36");
myHeaders.append("x-coursera-application", "ondemand");
myHeaders.append("x-coursera-version", "a88de6f87e344241c5fe1889e1b497cbe6379ff3");
myHeaders.append("x-csrf2-cookie", "csrf2_token_EEEFW7Al");
myHeaders.append("x-csrf2-token", "y9INasxFJiLoIjxFpI0At5Sm");
myHeaders.append("x-csrf3-token", "1710533627.pfIzyYOxQKUs34fW");
myHeaders.append("x-csrftoken", "jajf3lvQwwxWku1VUqgdUHBH");
myHeaders.append("x-requested-with", "XMLHttpRequest");

const raw = "{\"userId\":146239292,\"courseId\":\"gbVoaCPgEe6IABIijrVckw\",\"itemId\":\"K7BtV\"}";
console.log(myHeaders);

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

console.log(raw);

fetch("https://www.coursera.org/api/onDemandSupplementCompletions.v1", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));