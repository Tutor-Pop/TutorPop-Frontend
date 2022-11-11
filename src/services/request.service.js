const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export function createRequest(form) {
    return axios.post(`${BACKEND_URL}/api/requests`, form, {
        headers: {
            'content-type': 'multipart/form-data',
        }
    })
}

export function uploadPaymentSlipForRequest(request_id, form) {
    return axios.put(`${BACKEND_URL}/api/requests/${request_id}/upload_payment`, form, {
        headers: {
            'content-type' : 'multipart/form-data'
        }
    })
}

export function getRequestID(school_id) {
    return axios.get(`${BACKEND_URL}/api/requests/${school_id}/school_id`)
}
