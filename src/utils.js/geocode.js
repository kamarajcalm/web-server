const request = require('request');
const getForecast = require('../utils.js/forecast')

 geocode = (city, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1Ijoia2FtYXJhamNhbG0iLCJhIjoiY2tvcG81ZGRrMGprZjJ3cjNxam1tZHZzcSJ9.iYTaAz4RptsQrj7-c5X1KQ`
    console.log(url,"gg")
    request({ url: url, json: true }, (err, response) => {
        let data = {
            lat: response?.body?.features[0]?.bbox[0],
            long: response?.body?.features[0]?.bbox[1],
            place: response?.body?.features[0]?.place_name,
        }
        getForecast(data,(err,weather)=>{
            callback(err, weather)
        })
   

    })
}

module.exports = geocode;