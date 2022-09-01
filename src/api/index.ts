import axios, {AxiosInstance} from "axios";

const request: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5173',
    timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use(
    config => {
        // ...
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        // ...
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default request