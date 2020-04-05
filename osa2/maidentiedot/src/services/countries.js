import axios from 'axios'
const baseUrl = 'https://restcountries.eu/rest/v2/'

const getAll = () => {
    return axios.get(baseUrl+'all')
}

export default {
    getAll: getAll
}
