import Layout from "./containers/layout"
import FormRecipe from "./forms/form-recipe"

function RecipeForm() {
    return (
        <Layout>
            <h1 className="title">Añadir receta</h1>
            <FormRecipe/>
            <h2 className="title">Ingredientes</h2>
        </Layout>
    )
}

export default RecipeForm
