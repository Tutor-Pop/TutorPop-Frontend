const axios = require('axios')
const { BACKEND_URL } = require('../constants/service.constant')
 
export async function getAllReservations(account_id){
    return axios.get(`${BACKEND_URL}/api/accounts/${account_id}/reservations`)
}
 
export async function getReserve(){
 
}
 
export async function getTeachings(){
 
}
 
export async function getTime(){
 
}
 
export async function getSchoolMembers(account_id){
    return axios.get(`${BACKEND_URL}/api/${account_id}/schools`);
}
 
export async function getSchoolOwner(account_id){
    return axios.get(`${BACKEND_URL}/api/accounts/${account_id}/owners`);
   
}
