import axios, {AxiosRequestConfig} from "axios";

export class GreenService {
    static readonly apiClient = axios.create({
        baseURL: 'https://api.green-api.com/'
    })
    static GET = async <T>(url: string, config?: AxiosRequestConfig):Promise<T> => {
        return await this.apiClient.get(url, config)
    }
    static POST = async <T>(url: string, data?:{[k: string]: any},config?: AxiosRequestConfig):Promise<T> => {
        return await this.apiClient.post(url, data, config)
    }
}
