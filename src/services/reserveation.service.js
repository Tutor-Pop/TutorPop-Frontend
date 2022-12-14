const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function createReservation(formData){
    return axios.post(`${BACKEND_URL}/api/reservations`,formData,{
        headers: {
            'content-type': 'multipart/form-data',
        }
    })
}

export async function getAllReservationInCourse(course_id){
    return axios.get(`${BACKEND_URL}/api/courses/${course_id}/reservations`)
}

export async function updateReservationStatus(reservation_id,status){
    return axios.put(`${BACKEND_URL}/api/reservations/${reservation_id}/status`,{
        status:status
    })
}

export async function deleteReservation(reservation_id){
    return axios.delete(`${BACKEND_URL}/api/reservations/${reservation_id}`)
}

export function uploadPaymentPicture(reservation_id,form) {
    return axios.put(`${BACKEND_URL}/api/reservations/${reservation_id}/payment`, form, {
        headers: {
            'content-type': 'multipart/form-data',
        }
    })
}
export async function getResevationIdFromAccountCourse(account_id,course_id){
    return axios.get(`${BACKEND_URL}/api/reservations/${account_id}/${course_id}/rev_id`)
}