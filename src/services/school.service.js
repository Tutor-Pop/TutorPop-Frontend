const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function getSchool(id){
    return axios.get(`${BACKEND_URL}/api/schools/${id}`)
}

export async function getSchool(body){
    return axios.post(`${BACKEND_URL}/api/schools`,body)
}

