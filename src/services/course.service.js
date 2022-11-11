const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function getCourse(school_id, course_id) {
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}`)
}

export async function createCourse(school_id, body) {
    return axios.post(`${BACKEND_URL}/api/schools/${school_id}/courses`, body)
}

export async function updateCourse(school_id, course_id, body) {
    return axios.put(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}`, body)
}

export async function deleteCourse(school_id, course_id) {
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}`)
}

export async function getStudents(school_id, course_id) {
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}/students`)
}

export async function getTeachers(school_id, course_id) {
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}/teachers`)
}

export async function updateTeachers(school_id, course_id, body) {
    return axios.put(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}/teachers`, body)
}

export async function deleteTeacher(school_id, course_id) {
    return axios.delete(`${BACKEND_URL}/api/schools/${school_id}/courses/${course_id}/teachers`)
}

export async function getTeachingCourses(account_id) {
    return axios.get(`${BACKEND_URL}/api/accounts/${account_id}/teachings`)
}

export async function getStudyCourses(account_id) {
    return axios.get(`${BACKEND_URL}/api/accounts/${account_id}/courses`)
}

export async function getAllCourses(school_id) {
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/courses`)
}

export async function uploadPaymentMethod(course_id, formData) {
    return axios.put(`${BACKEND_URL}/api/courses/${course_id}/upload_payment`, formData, {
        headers: {
            'content-type': 'multipart/form-data',
        }
    })
}