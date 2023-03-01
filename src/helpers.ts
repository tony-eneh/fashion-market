export function getColor(name?: string) {
    switch (name) {
        case 'active': return '#80A499';
        case 'muted': return '#B9BABC';
        case 'white': return 'white';
        case 'standard': return '#54545D';
        default: return '#54545D'
    }
}

export function shortenNumber(num: number = 0) {
    return '2.3k+'
}