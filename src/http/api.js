import axios from "axios";

export function login(params){
    return axios({
        method:'get',
        url:'/login',
        params
    })
}