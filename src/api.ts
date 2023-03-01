import { IProduct } from "./models"

const products: IProduct[] = [
    {
        id: 1,
        image: '/images/shirt-1.webp',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag. Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: true,
        moreImages: [
            '/images/shirt-2.webp',
            '/images/shirt-3.webp',
            '/images/shirt-4.jpeg'
        ]
    }, {
        id: 2,
        image: '/images/shirt-2.webp',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: false
    }, {
        id: 3,
        image: '/images/shirt-3.webp',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: false
    }, {
        id: 4,
        image: '/images/shirt-4.jpeg',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: false
    }, {
        id: 5,
        image: '/images/shirt-5.jpeg',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: false
    }, {
        id: 6,
        image: '/images/shirt-6.jpeg',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: true
    }, {
        id: 7,
        image: '/images/shirt-7.webp',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: false
    }, {
        id: 8,
        image: '/images/shirt-8.webp',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: false
    }, {
        id: 9,
        image: '/images/shirt-9.jpeg',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: false
    }, {
        id: 10,
        image: '/images/shirt-10.jpeg',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: false
    }, {
        id: 11,
        image: '/images/shirt-11.jpeg',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: false
    }, {
        id: 12,
        image: '/images/shirt-12.jpeg',
        type: 'Shirt',
        description: "Short beautiful shirt wey get swag",
        rating: 4,
        reviews: 2354,
        price: 23.5,
        liked: false
    },
]

export function getProducts() {
    return Promise.resolve(products)
}

export function getProductByID(id: number) {
    return Promise.resolve(products.find(p => p.id == id)).then(p => !p ? Promise.reject() : p)
}