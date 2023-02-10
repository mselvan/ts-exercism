export const COLORS: string[] = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
];

export const decodedValue = (colorArr: string[]): number => {
    const [first, second] = colorArr;
    return parseInt(`${COLORS.indexOf(first)}${COLORS.indexOf(second)}`);
};
