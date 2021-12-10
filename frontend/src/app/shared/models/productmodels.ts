export interface Product {
    id: number;
    name: string;
    description: string;
    image: any;
    price_per_unit: number;
    discount: number;
    rating: number;
    tags: number[];
    categories: number[];
    initial_quantity: number;
    type: number;
}

export interface AddProduct {
    name: string;
    store: number;
    description: string;
    image: any;
    price_per_unit: number;
    discount: number;
    tags: number[];
    categories: number[];
    initial_quantity: number;
    type: number;
}



export interface Tag {
    id: number;
    description: string;
}

export interface Category {
    id: number;
    description: string;
}

export interface SubCategory {
    id: number;
    description: string;
}

export interface Type {
    id: number;
    title: string;
    description: string;
}

export interface Order {
    id: number;
    state: string;
    user: number;
    product: Product;
    price_per_unit: number;
    quantity: number;
    order_date: string;
}

export interface CreateOrder {
    user: string;
    product: number;
    quantity: number;
}