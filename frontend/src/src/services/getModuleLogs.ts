import BASE_URL from "./config";

const getModulesLogs =  async ( moduleId:number, setValueFunc: any ) => {
    await fetch(`${BASE_URL}/logs/all/${moduleId}`, { // Change Later For Base URL
        method: "GET",
        headers: {
            "Content-Type":  "application/json; charset=UTF-8"
        }
    })
    .then( response => response.json() )
    .then(( response ) => {
        setValueFunc( response );
    })
    .catch(( err:Error ) => {
        throw err;
    });
}
export default getModulesLogs;