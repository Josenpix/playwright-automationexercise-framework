import { ProductApiModel } from "./productApiModel";

export type ProductsResponse = {
    responseCode: number;
    products: ProductApiModel[];
}