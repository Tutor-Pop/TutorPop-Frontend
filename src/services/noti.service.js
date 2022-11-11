const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function getNoti(account_id){
    return axios.get(`${BACKEND_URL}/api/accounts/${account_id}/messages`)
}