
// Get All Values Of a module in logs to feed chart in detail page

const getAllLogsValues =  async ( moduleId:number, setValueFunc: any ) => {
    await fetch(`http://localhost:8080/detail/${moduleId}`, { 
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
export default getAllLogsValues;