const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function getAccount(account_id){
    return axios.get(`${BACKEND_URL}/api/accounts/${account_id}`)
}

export async function updateAccount(account_id,body){
    return axios.put(`${BACKEND_URL}/api/accounts/${account_id}`,body)
}

export async function deleteAccount(account_id){
    return axios.delete(`${BACKEND_URL}/api/accounts/${account_id}`)
}

export async function getAllAccounts(is_verified=0,year_of_birth=-1){
    let queryParams = `is_verified=${is_verified}&year_of_birth=${year_of_birth}`
    return axios.get(`${BACKEND_URL}/api/accounts?${queryParams}`)
}