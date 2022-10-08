const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

function getRoom(school_id,room_id){
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/rooms/${room_id}`)
}

function updateRoom(school_id,room_id,body){
    return axios.put(`${BACKEND_URL}/api/schools/${school_id}/rooms/${room_id}`,body)
}