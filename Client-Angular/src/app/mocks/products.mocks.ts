import { Product } from "../interfaces/products.interface";

/**
 * Mock data for products.
 *
 * @remarks
 * This array contains sample product data used for testing and development purposes.
 * Each product object includes id, name, category, and price.
 *
 * @example
 * ```ts
 * import { PRODUCTS_MOCK } from './mocks/products.mocks';
 * console.log(PRODUCTS_MOCK[0].name); // 'Leche entera'
 * ```
 */
export const PRODUCTS_MOCK: Product[] = [
    {
        id: 1,
        name: 'Leche entera',
        category: 'Lacteos',
        price: 4500,
    },
    {
        id: 2,
        name: 'Manzana roja',
        category: 'Frutas',
        price: 3200,
    }
];