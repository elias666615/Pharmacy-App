export interface LoginInfo {
    email: string;
    Accesstoken: string;
    Refreshtoken: string;
}

export interface UserInfo {
    phone_number: string;
    first_name?: string;
    last_name?: string;
    role: Role;
    email: string;
    city: string;
    street: string;
    location: string;
}

export interface Role {
    id: number;
    description: string;
    code: string;
}

export interface Store {
    id: number;
    name: string;
    rating: number;
    rating_num: number;
    total_revenue: number;
    products_sold: number;
    account_holder_name: string;
    account_number: string;
    name_of_bank: string;
}

export interface CardInfo {
    user: string;
    card_number: string;
    expiry_pate: string;
    name_on_card: string;
    cvv: string;
}