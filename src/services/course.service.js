const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function createCourse(school_id, body) {
    return axios.post(`${BACKEND_URL}/api/schools/${school_id}/courses`, body)
}

export async function getCourse(course_id){
    return axios.get(`${BACKEND_URL}/api/courses/${course_id}`)
}

export async function getStudents(school_id, course_id) {
    return axios.get(`${BACKEND_URL}/api/courses/${course_id}/students`)
}

export async function getSingleCourseWithDetail(course_id) {
    return axios.get(`${BACKEND_URL}/api/courses/${course_id}/details`)
}

export async function getSingleCourseWithDetail(course_id) {
    return axios.get(`${BACKEND_URL}/api/courses/${course_id}/details`)
}

export async function putCourse(course_id,body) {
    return axios.get(`${BACKEND_URL}/api/courses/${course_id}`,body)
}

export async function getTeachers(course_id) {
    return axios.get(`${BACKEND_URL}/api/courses/${course_id}/teachers`)
}

export async function putTeachers(course_id,body) {
    return axios.get(`${BACKEND_URL}/api/courses/${course_id}/teachers`,body)
}

export async function deleteTeacher(course_id,body){
    return axios.delete(`${BACKEND_URL}/api/courses/${course_id}/teachers`,body)
}

export async function deleteCourse(course_id) {
    return axios.delete(`${BACKEND_URL}/api/courses/${course_id}`)
}

export async function getAllCourses(school_id) {
    return axios.get(`${BACKEND_URL}/api/schools/${school_id}/courses`)
}

export async function getTeachingCourses(account_id) {
    return axios.get(`${BACKEND_URL}/api/accounts/${account_id}/teachings`)
}

export async function getallcoursespopulate() {
    return axios.get(`${BACKEND_URL}/api/courses/populate`)
}

export async function uploadPaymentMethod(course_id, formData) {
    return axios.put(`${BACKEND_URL}/api/courses/${course_id}/upload_payment`, formData, {
        headers: {
            'content-type': 'multipart/form-data',
        }
    })
}

export async function uploadCoursePicture(course_id, form) {
    return axios.put(`${BACKEND_URL}/api/courses/${course_id}/upload_poster`, form, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}

export async function updateCourse(course_id, body) {
    return axios.put(`${BACKEND_URL}/api/courses/${course_id}`, body)
}


export async function uploadpaymentmethodpictureforcourse(course_id,body) {
    return axios.get(`${BACKEND_URL}/api/courses/${course_id}/upload_payment`,body)
}


export async function uploadcoursepicture(course_id,body) {
    return axios.get(`${BACKEND_URL}/api/courses/${course_id}/upload_poster`,body)
}

export async function getAllCoursePopulate(){
    return axios.get(`${BACKEND_URL}/api/courses/populate`)
}