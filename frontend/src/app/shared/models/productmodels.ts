export class Product {
    id: number;
    name: string;
    description: string;
    images: string;
    price: number;
    discount: number;
    rating: number;
    tags: Tags[];
    categories: SubCategory[];

    constructor(id: number, name: string, description: string, images: string, price: number, discount: number, rating: number, tags: Tags[], categories: SubCategory[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.images = images;
        this.price = price;
        this.discount = discount;
        this.rating = rating;
        this.tags = tags;
        this.categories = categories;
    }
}



export interface Tags {
    id: number;
    description: string;
}

export interface Category {
    id: number;
    description: string;
}

export class SubCategory {
    id: number;
    description: string;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
    }
}