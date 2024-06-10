import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use((req: any) => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    console.log(baseURL);
    req.url = baseURL + req.url;
    req.headers = {
        ...req.headers,
        'Authorization': 'jwt token'
    }
    return req;
})

export default axiosInstance;