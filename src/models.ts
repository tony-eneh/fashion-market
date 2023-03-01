export interface IconProps extends IComponentProps {
    variant?: 'active' | 'muted' | 'standard',
}

export interface IComponentProps {
    className?: string,
    style?: any,
    children?: any,
}

export interface IProduct {
    id: number,
    image: string,
    type: string,
    description: string,
    rating: number,
    reviews: number,
    price: number,
    liked?: boolean
}