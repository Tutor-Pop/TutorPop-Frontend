import { BACKEND_URL } from "../constants/service.constant";

export function loadPicture(url){
    return require(`${BACKEND_URL}/${url}`)
}