import Layout from "./containers/layout";
import ContainerRecipes from "./containers/container-recipes";
import ContainerFilters from "./containers/container-filters";
import Nav from "./containers/nav";
import {useState,useEffect} from 'react'
import {getRecipes} from '../services/recipes'
import { Button } from "./buttons/button";
import { FaBook } from "react-icons/fa6";


function RecipeBook() {
    const [recipes,setRecipes] = useState([])
    const [recipesFiltered,setRecipesFiltered] = useState([])
    useEffect(()=>{
        getRecipes().then(({data,isError})=>{
        if(isError){
            console.log('Ocurrio un error al obtener las recetas');
            return
        }
        setRecipes(data)
        setRecipesFiltered(data)
        });
    },[])

    return (
        <>
            <Nav/>
            <Layout>
                <h1 className="title">El recetario de Rub</h1>
                <ContainerFilters
                    recipes={recipes}
                    setRecipesFiltered={setRecipesFiltered} 
                />
                {
                    (recipesFiltered.length === 0) ? 
                        <h2>No hay recetas disponibles</h2> :
                        <ContainerRecipes 
                            recipes={recipesFiltered}
                        />
                }
                
                <Button 
                    link='addRecipe'
                    text={<FaBook/>}
                    className='buttonRouded'
                />
            </Layout>
        </>
    )
}

export default RecipeBook
