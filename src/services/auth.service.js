const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function register(body){
    return axios.post(`${BACKEND_URL}/api/register`,body)
}

export async function login(body){
    return axios.post(`${BACKEND_URL}/api/login`,body)
}

export function logout(){
    const body = {
        "account_id": localStorage.getItem('account_id'),
        "token": localStorage.getItem('token')
    }
    localStorage.removeItem('account_id')
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    window.location.reload(false)
    return axios.post(`${BACKEND_URL}/api/logout`,body)
}

export function getAuthorization(){
    try{
        const body = {
            "account_id": localStorage.getItem('account_id'),
            "token": localStorage.getItem('token')
        }
        return axios.put(`${BACKEND_URL}/api/verify`,body)
    }   
    catch(err){
        return false
    }
}