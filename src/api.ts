import { IProduct, IReview } from "./models"

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
        ],
        brand: 'ChArmkpR',
        color: 'Aprikot',
        category: 'Casual Shirt',
        material: 'Polyester',
        condition: 'New',
        weight: '200 g',
        details: [
            'Long-sleeve dress hirt in classic fit featuring button-down collar', 'Patch Pocket on Left Chest', 'Durable Combination Cotton Fabric', 'Comfortable and quality dress shirt', 'Go To Classic button down shirt for all special occasions'
        ],
        shippedFrom: 'Jakarta, Indonesia',
        shipping: 0,
        estimatedArrivalDate: '25 - 27 Oct 2022'
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

const reviews: IReview[] = [
    {
        authorImage: '/logo192.png',
        authorName: 'Eren Harcourt',
        date: 'Yesterday',
        text: 'According to my expectations. This is the best. Thank you',
        rating: 5,
        tags: [
            'Product in good condition', 'Very fast delivery', 'Fast seller response'
        ]
    },{
        authorImage: '/images/shirt-11.jpeg',
        authorName: 'Akpabio Lucky',
        date: 'Yesterday',
        text: 'According to my expectations. This is the best. Thank you',
        rating: 5,
        tags: [
            'Product in good condition', 'Very fast delivery', 'Fast seller response'
        ]
    }
]
export function getReviews() {
    return Promise.resolve(reviews)
}