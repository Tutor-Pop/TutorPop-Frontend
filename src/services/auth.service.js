const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function register(body){
    return axios.post(`${BACKEND_URL}/register`,body)
}