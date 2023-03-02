export interface IconProps extends IComponentProps {
    variant?: 'active' | 'muted' | 'standard' | 'white',
    strokeWidth?: number | string,
}

export interface IComponentProps {
    className?: string,
    style?: any,
    children?: any,
    ref?: any,
}

export interface IProduct {
    id: number,
    image: string,
    type: string,
    description: string,
    rating: number,
    reviews: number,
    price: number,
    liked?: boolean,
    moreImages?: string[],
    sold?: number,
    brand?: string,
    category?: string,
    condition?: string,
    color?: string,
    material?: string,
    weight?: string,
    details?: string[],
    shippedFrom?: string,
    shipping?: number,
    estimatedArrivalDate?: string,
}

export interface IRatingsCount {
    1: number,
    2: number,
    3: number,
    4: number,
    5: number,
}

export interface IReview {
    date: string,
    authorName: string,
    authorImage: string,
    rating: number,
    text: string,
    tags?: string[],
}