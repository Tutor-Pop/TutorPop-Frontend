const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function getSchool(school_id){
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}`)
}

export async function createSchool(form){
    return axios.post(`${BACKEND_URL}/api/schools`, form, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}

export async function updateSchool(school_id,body){
    return axios.put(`${BACKEND_URL}/api/schools/${school_id}`,body)
}

export async function deleteSchool(school_id){
    return axios.delete(`${BACKEND_URL}/api/schools/${school_id}`)
}

export async function updateSchoolStatus(school_id,status){
    return axios.put(`${BACKEND_URL}/api/schools/${school_id}/status`,{status:status})
}

export async function getTeacher(school_id){
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/teachers`)
}

export async function updateTeacher(school_id,body){
    return axios.put(`${BACKEND_URL}/api/schools/${school_id}/teachers`,body)
}

export async function deleteTeacher(school_id,body){
    return axios.delete(`${BACKEND_URL}/api/schools/${school_id}/teachers`,{data: body})
}

export async function getAllTeachingSchool(user_id) {
    return axios.get(`${BACKEND_URL}/api/accounts/${user_id}/schools`)
}

export async function getAllSchoolDetail(school_id){
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/details`)
}
export async function getAllOthers(school_id){
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/others`)
}

