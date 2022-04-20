import axios from "axios";
const service = axios.create({
    baseURL:'',
    timeout:1000
})
service.interceptors.request.use(config => {
    return config

})
service.interceptors.response.use(response => {
    return response

},err => {
    return Promise.reject(err)
})
export default service