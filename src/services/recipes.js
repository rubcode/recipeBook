const BASE_API = "https://apirecipebook-production.up.railway.app/";

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

export async function getRecipes(){
    return fetchHandler(`${BASE_API}/recipes`);
}

export async function addRecipe(recipe){
    return fetchHandler(`${BASE_API}/recipes`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    })
}
