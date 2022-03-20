// Return and convert last param in URL. 
// Like this : /module/history/:id
// last param=>id:string=>id:number
export const getIdInParams = () => {
    const fullUrl = window.location.href;
    const params: string | string[] = fullUrl.split('/')
    return +params[params.length - 1];
}

// Return time in Hour between two dates
// Expected date format in params : '2038-01-19 03:14:07' ( UTC timestamp )
// get the expected format with : new Date().toJSON();
export const getTimeBewtweenDate = ( pastDate:string , actualDate:string ) => {
    const past:any = new Date( pastDate );
    const actual:any = new Date( actualDate );
    const timeInHour = ((( (actual - past) / 1000) / 60) / 60) / 60; // Hour
    const timeStr = timeInHour
    .toFixed(2)
    .toLocaleString()
    .replace('.', 'H');
    return timeStr + "mn";
}