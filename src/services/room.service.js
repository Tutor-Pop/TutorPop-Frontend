const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export function getRoom(school_id,room_id){
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/rooms/${room_id}`)
}

export function updateRoom(school_id,body){
    return axios.put(`${BACKEND_URL}/api/schools/${school_id}/rooms`,body)
}

export function deleteRoom(school_id,room_id){
    return axios.delete(`${BACKEND_URL}/api/schools/${school_id}/rooms/${room_id}`)
}

export function getAllRooms(school_id) {
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/rooms`)
}

