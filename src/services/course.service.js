const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function getCourse(school_id,course_id){
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}`)
}

export async function createCourse(school_id,body){
    return axios.post(`${BACKEND_URL}/api/schools/${school_id}/courses`,body)
}

export async function updateCourse(school_id,course_id,body){
    return axios.put(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}`,body)
}

export async function deleteCourse(school_id,course_id){
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}`)
}

export async function getStudent(school_id,course_id){
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}/students`)
}

export async function getTeacher(school_id,course_id){
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}/teachers`)
}

export async function updateTeacher(school_id,course_id,body){
    return axios.put(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}/teachers`,body)
}

export async function deleteTeacher(school_id,course_id){
    return axios.delete(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}/teachers`)
}