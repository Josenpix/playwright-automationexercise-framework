import { BaseApi } from "./BaseApi";
import { ProductsResponse } from "../../types/productsResponse";

export class ProductsApi extends BaseApi {

    async getAllProducts(){
        return await this.get('/productsList');
    }
    async searchProduct(searchText: string){
        return await this.postJson<ProductsResponse>('/searchProduct',
        {
            form: {
                search_product: searchText
            }
        }
    )}
    async getAllProductsData(){
        return await this.getJson<ProductsResponse>('/productsList');
    }
    async invalidSearchProduct(){
        return await this.post('/searchProduct');
    }
    async invalidProductsMethod(){
        return await this.post('/productsList');
}
    async invalidSearchMethodData(){
         const response = await this.invalidSearchProduct();
         return await response.json();
}
    async invalidProductsMethodData(){
         const response = await this.invalidProductsMethod();
         return await response.json();
}
}