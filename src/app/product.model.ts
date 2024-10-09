export interface Product {
    image: ImageProduct;
    name: string;
    category: string;
    price: number;
}

export interface ImageProduct {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}