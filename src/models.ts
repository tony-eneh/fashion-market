export interface IconProps extends IComponentProps {
    variant?: 'active' | 'muted' | 'standard',
}

export interface IComponentProps {
    className?: string,
    style?: any,
}