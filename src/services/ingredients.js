const BASE_API = "https://apirecipebook-production.up.railway.app/ingredients";

async function fetchHandler(url,options){
    const response = await fetch(url,options)
    if(!response){
        return{
            data: null,
            isError: true
        }
    }
    const data = await response.json()
    return{
        data: data.data,
        isError: false
    }
}

export async function addIngredients(ingredient){
    return fetchHandler(`${BASE_API}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ingredient)
    })
}