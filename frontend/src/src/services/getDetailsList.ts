const getDetailsList =  async ( setValueFunc: any ) => {
    await fetch('http://localhost:8080/detail/all', { // Change Later For Base URL
        method: "GET",
        headers: {
            "Content-Type":  "application/json; charset=UTF-8"
        }
    })
    .then( response => response.json() )
    .then(( response ) => {
        setValueFunc( response );
        console.log( response );
    })
    .catch(( err:Error ) => {
        throw err;
    });
}
export default getDetailsList;