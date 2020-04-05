import axios from 'axios'
const baseUrl = 'http://api.weatherstack.com/current?access_key=a61b13cda29f4680488527c08008723e&query='

const getWeather = (city) => {
    return axios.get(baseUrl+city)
}

export default {
    getWeather: getWeather
}
