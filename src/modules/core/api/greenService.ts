import axios, {AxiosRequestConfig} from "axios";

export class GreenService {
    apiClient = axios.create({
        baseURL: ''
    })
    GET = async (url: string, config: AxiosRequestConfig) => {
        return await this.apiClient.get(url, config)
    }
    POST = async (url: string, config: AxiosRequestConfig) => {
        return await this.apiClient.post(url, config)
    }
}
