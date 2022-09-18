import axios from "axios";
import { URL } from "../constants/service.constant";
const API = "http://localhost:8000/api"

const REGISTER = `${API}/register` 

export async function register(target){
    return axios.post(URL.Account.Register,{
            firstname: target.firstname.value,
            lastname: target.lastname.value,
            username: target.username.value,
            password: target.password.value,
            email: target.email.value,
            year_of_birth: target.year_of_birth.value,
            description: target.description.value,
        }
    )
}

export async function getAllAccounts(offset,limit){
    return axios.get(`${URL.Account.GetAllAccounts}`)
}

export async function getAccount(id){
    return axios.get(`${URL.Account.GetAccount}/${id}`)
}