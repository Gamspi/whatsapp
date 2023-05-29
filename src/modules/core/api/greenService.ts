import axios, {AxiosRequestConfig} from "axios";

export class GreenService {
    static readonly apiClient = axios.create({
        baseURL: 'https://api.green-api.com/'
    })
    static GET = async (url: string, config?: AxiosRequestConfig) => {
        return await this.apiClient.get(url, config)
    }
    static POST = async (url: string, config: AxiosRequestConfig) => {
        return await this.apiClient.post(url, config)
    }
}
