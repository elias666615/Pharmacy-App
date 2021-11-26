export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
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
    image: string;
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