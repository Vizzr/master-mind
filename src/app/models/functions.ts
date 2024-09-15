export function isArrayUnique(array: unknown[]): boolean {
    return !array.some((val: unknown, i: number) => array.indexOf(val) !== i)
}

export function shuffleArray(array: unknown[]): void {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}