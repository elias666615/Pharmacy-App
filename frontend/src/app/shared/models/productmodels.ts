import { Store } from '../../authentication/models/userModels';

export interface Product {
    id: number;
    store: Store;
    name: string;
    description: string;
    image: any;
    price_per_unit: number;
    discount: number;
    overall_rating: number;
    rating_num: number;
    tags: Tag[];
    categories: Category[];
    initial_quantity: number;
    type: Type;
    quantity: number;
    sold_quantity: number;
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
    rating: number;
    rating_num: number;
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
    user: user;
    state: string;
    product: Product;
    price_per_unit: number;
    quantity: number;
    checked_out_at: string;
    accep_reject_at: string;
    delivered_at: string;
    place_at: string;
}

export interface user {
    first_name: string;
    last_name: string;
    phone_number: string;
}

export interface CreateOrder {
    user: string;
    product: number;
    quantity: number;
}

export interface Rating {
    id?: number;
    product: number;
    rating_number: number;
    review: string;
    user: string;
    user_name: string;
    date_time: string;
}