
// Get All Values Of a module in logs to feed chart in detail page

import BASE_URL from "./config";

const getAllLogsValues =  async ( moduleId:number, setValueFunc: any ) => {
    await fetch(`${BASE_URL}/logs/all/values/${moduleId}`, { 
        method: "GET",
        headers: {
            "Content-Type":  "application/json; charset=UTF-8"
        }
    })
    .then( response => response.json() )
    .then(( response ) => {
        setValueFunc( response );
        console.log(response);
    })
    .catch(( err:Error ) => {
        throw err;
    });
}
export default getAllLogsValues;