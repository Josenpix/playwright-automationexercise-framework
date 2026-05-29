import { APIRequestContext }  from "@playwright/test";
export class BaseApi{
    request: APIRequestContext;
    baseUrl: string;

    constructor(request: APIRequestContext){
        this.request = request;
        this.baseUrl = 'https://automationexercise.com/api';
    }

    async get(endpoint: string){
        return await this.request.get(`${this.baseUrl}${endpoint}`);
    }
    async post(endpoint: string, body?: object){
        return await this.request.post(`${this.baseUrl}${endpoint}`, body);
    }
    async getJson<T>(endpoint: string): Promise<T> {
        const response = await this.get(endpoint);
        return await response.json();
    }
    async postJson<T>(endpoint: string, body?: object): Promise<T> {
        const response = await this.post(endpoint, body);
        return await response.json();
    }
}