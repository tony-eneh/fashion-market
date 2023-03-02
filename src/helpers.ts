export function getColor(name?: string) {
    switch (name) {
        case 'active': return '#4ca78d';
        case 'muted': return '#B9BABC';
        case 'white': return 'white';
        case 'standard': return '#54545D';
        default: return '#54545D'
    }
}

export function shortenNumber(num: number = 0) {
    if (num < 1000) {
        return num
    } else {
        return `${(num / 1000).toFixed(1)}k+`
    }
}