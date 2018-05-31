const request = require('request');
const argv = require('yargs').argv;
require('dotenv').config();

const apiKey = process.env.WEATHER_KEY;
const cityName = argv.c || 'melbourne';
const countryCode = 'AU';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&units=metric&appid=${apiKey}`;

let c = argv.c;
let country = argv.country || 'AU';

request(url, (err, res, body) => {
    if (err) console.log('Error:', error);

    // console.log('Body:', body)
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degree celcius in ${weather.name}!`;
    console.log(message);
})
