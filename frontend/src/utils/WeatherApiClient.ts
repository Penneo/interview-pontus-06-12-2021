import axios, {AxiosInstance, AxiosResponse, AxiosError} from "axios";
import OpenWeatherConfig from 'config/openweathermap';

enum Methods {
    GET = 'GET',
    POST = 'POST'
};

type RequestConfig = {
    method: Methods;
    url: string;
    params?: any;
    data?: any
};

type QueryParameters = {
    [key: string]: any
}

export class WeatherApiClient {
    private appId: string;
    private client: AxiosInstance;

    constructor() {
        this.appId = OpenWeatherConfig.apiKey;
        this.client = axios.create({
            baseURL: OpenWeatherConfig.baseURL
        });
    }

    // @see: https://openweathermap.org/appid
    private getAuthParams() {
        return {
            APPID: this.appId
        };
    }

    public async get(url: string, params: QueryParameters = {}): Promise<AxiosResponse> {
        return this.makeRequest({
            method: Methods.GET,
            url,
            params: {
                ...params,
                ...this.getAuthParams()
            }
        });
    }

    public async post(url: string, data?: any): Promise<AxiosResponse> {
        return this.makeRequest({method: Methods.POST, url, params: this.getAuthParams(), data});
    }

    private async makeRequest(requestConfig: RequestConfig) {
        try {
            const response = await this.client.request(requestConfig);
            return this.handleResponse(response);
        } catch (error) {
            return this.handleError(error);
        }
    }



    private handleResponse(response: AxiosResponse) {
        return response.data;
    }

    private handleError(error: AxiosError) {
        throw error;
    }
};
