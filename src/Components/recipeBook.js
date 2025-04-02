import Layout from "./containers/layout";
import ContainerRecipes from "./containers/container-recipes";
import ContainerFilters from "./containers/container-filters";
import {useState,useEffect} from 'react'
import {getRecipes} from '../services/recipes'
import { Button } from "./buttons/button";
import { FaBook } from "react-icons/fa6";


function RecipeBook() {
    const [recipes,setRecipes] = useState([])
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
            <h1 className="title">El recetario de Rub</h1>
            <ContainerFilters/>
            <ContainerRecipes 
                recipes={recipes}
            />
            <Button 
                link='addRecipe'
                text={<FaBook/>}
                className='buttonRouded'
            />
      </Layout>
    )
}

export default RecipeBook
