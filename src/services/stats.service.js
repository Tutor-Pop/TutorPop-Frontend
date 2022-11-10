const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')

export async function getActiveStats() {
  return axios.get(`${BACKEND_URL}/api/stats/active`)
}

export async function getPendingRequest() {
  return axios.get(`${BACKEND_URL}/api/stats/pendingreq`)
}