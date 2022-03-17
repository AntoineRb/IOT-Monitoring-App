export type TGetRandomValue = (min: number, max: number) => number;

export const getRandomValue:TGetRandomValue = ( min:number, max:number ) => {
    return Math.floor( Math.random() * ( max - min ) ) + min;
}