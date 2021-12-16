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
}

export interface Role {
    id: number;
    description: string;
    code: string;
}

export interface Store {
    id: number;
    name: string;
    location: string;
}

export interface CardInfo {
    user: string;
    card_number: string;
    expiry_pate: string;
    name_on_card: string;
    cvv: string;
}