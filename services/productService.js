import Product from "../models/productModels";

export default class ProductService {
    constructor() {

    }
    
    async fetchProducts(store_id) {
        var products = null;
        try {
            const response = await fetch(`http://10.0.2.2:8000/store/products/?store_id=${store_id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            products = json;
        } catch (error) {
            console.error(error);
        } finally {
            return products;
        }
    }
}