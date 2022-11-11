const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export function createRequest(form) {
    return axios.post(`${BACKEND_URL}/api/requests`, form, {
        headers: {
            'content-type': 'multipart/form-data',
        }
    })
}