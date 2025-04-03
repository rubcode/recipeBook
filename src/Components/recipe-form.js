import Layout from "./containers/layout"
import FormRecipe from "./forms/form-recipe"
import Nav from "./containers/nav"
import FormIngredient from "./forms/form-ingredient"
import { useState } from "react"

function RecipeForm() {
    const [idRecipe,setIdRecipe] = useState(0)
    return (
        <>
            <Nav/>
            <Layout>
                <h1 className="title">Añadir receta</h1>
                <FormRecipe 
                    setIdRecipe={setIdRecipe}
                />
                <h1 className="title">Añadir ingredientes</h1>
                <FormIngredient
                    idRecipe={idRecipe}
                />
            </Layout>
        </>
    )
}

export default RecipeForm
