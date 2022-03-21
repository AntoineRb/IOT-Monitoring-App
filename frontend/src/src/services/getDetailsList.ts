import BASE_URL from "./config";

const getDetailsList =  async ( setValueFunc: any ) => {
    await fetch(`${BASE_URL}/detail/all`, { // Change Later For Base URL
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
export default getDetailsList;