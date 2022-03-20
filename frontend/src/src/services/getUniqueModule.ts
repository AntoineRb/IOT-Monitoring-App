const getUniqueModule =  async ( moduleId:number, setValueFunc: any ) => {
    await fetch(`http://localhost:8080/module/${moduleId}`, { // Change Later For Base URL
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
export default getUniqueModule;