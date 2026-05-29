import { expect } from "@playwright/test";
import { ProductApiModel } from "../../types/productApiModel";

export function verifyProductStructure(product: ProductApiModel) {
    expect(product.id).toBeDefined();
    expect(product.name).not.toBe('');
    expect(product.price).not.toBe('');
    expect(product.brand).not.toBe('');

    expect(product.category).toBeDefined();
    expect(product.category.category).not.toBe('');
    expect(product.category.usertype.usertype).not.toBe('');
}
