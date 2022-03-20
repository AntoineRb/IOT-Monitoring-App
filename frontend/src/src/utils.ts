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
    const timeInSeconds = (((actual - past) / 1000) / 60); // Seconds
    const h:string = Math.floor(timeInSeconds / 3600).toString();
    const m:string = Math.floor(timeInSeconds % 3600 / 60).toString();
    const s:string = Math.floor(timeInSeconds % 3600 % 60).toString();
    return h + 'H:' + m + 'm:' + s + 's' ;
}

export const formatDate = ( date:Date ) => {
    return date.toLocaleString( navigator.language, {
        weekday: 'short',
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
}