const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function courseSearchFilter(){
    return axios.get(`${BACKEND_URL}/api/courses/search`)
}

export async function schoolSearchFilter(){
    return axios.get(`${BACKEND_URL}/api/schools/search`)
}