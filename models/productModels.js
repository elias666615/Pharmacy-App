export default class Product {
    constructor(id, name, description, image, rating, price_per_unit, discount, initial_quantity, sold_quantity, tags, categories) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.rating = rating;
        this.price_per_unit = price_per_unit
        this.discount = discount;
        this.initial_quantity = initial_quantity;
        this.sold_quantity = sold_quantity;
        this.tags = tags;
        this.categories =  categories;
    }
}

export class tags {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }
}

export class subcategories {
    constructor(id, category_id, description) {
        this.id = id;
        this.category_id = category_id;
        this.description = description;
    }
}