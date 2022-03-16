export type TGetDate = () => string;

export const getDate:TGetDate = () => {
    return new Date().toJSON();
}

// Return time in minute between two dates
// Expected date format in params : UTC timestamp like '2038-01-19 03:14:07'
export const getTimeBewtweenDate = ( pastDate:string, actualDate:string ) => {
    const past:any = new Date( pastDate );
    const actual:any = new Date( actualDate );
    const date = ( (actual - past) / 1000) / 60;
    return date.toFixed( 2 );
}
