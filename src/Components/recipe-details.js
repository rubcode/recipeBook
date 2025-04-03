import Layout from "./containers/layout"
import ContainerDetails from "./containers/container-details"
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getRecipes} from '../services/recipes'

function RecipeDetails() {
    const [recipes,setRecipes] = useState([])
    const params = useParams();
    let idRecipe = params.idRecipe
    if(!idRecipe){
        idRecipe = 1
    }
    useEffect(()=>{
        getRecipes().then(({data,isError})=>{
        if(isError){
            console.log('Ocurrio un error al obtener las recetas');
            return
        }
        setRecipes(data)
        });
    },[])
    return (
        <Layout>
            <ContainerDetails 
                recipes={recipes}
                idRecipe={idRecipe}
            />
        </Layout>
    )
}

export default RecipeDetails
