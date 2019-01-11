const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=69f99d4903e8e47a33574241c6790d79`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}