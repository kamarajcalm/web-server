const request = require('request');
getForecast =(data,callback)=>{
    let url = `http://api.weatherstack.com/current?access_key=4512de2124b32eca989798402cf01764&query=${data.lat},${data.long}`

    request({ url: url, json: true }, (err, response) => {
        callback(err,`it is currently ${response?.body?.current?.temperature} degeere and it is feels like ${response?.body?.current?.feelslike} here`)
    })
}
module.exports= getForecast