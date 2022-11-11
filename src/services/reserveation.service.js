const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function createReservation(){
    return axios.post(`${BACKEND_URL}/api/reservations`)
}

export async function getAllReservationInCourse(course_id){
    return axios.get(`${BACKEND_URL}/api/courses/${course_id}/reservations`)
}

export async function updateReservationStatus(reservation_id,body){
    return axios.put(`${BACKEND_URL}/api/reservations/${reservation_id}/status`,body)
}

export async function deleteReservation(reservation_id){
    return axios.delete(`${BACKEND_URL}/api/reservations/${reservation_id}`)
}

export async function uploadPaymentPicture(reservation_id){
    return axios.put(`${BACKEND_URL}/api/reservations/${reservation_id}/payment`)
}

