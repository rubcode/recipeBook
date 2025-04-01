import styled from 'styled-components'
import RecipeCard from './recipe-card'

const ContainerRecipesStyled = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
`

function ContainerRecipes({recipes}) {
    
    return (
        <ContainerRecipesStyled>
            {recipes.map(recipe => {
                return <RecipeCard 
                    key={recipe.id_recipe}
                    recipeName={recipe.name_recipe}
                    recipeImage={recipe.url_image}
                 />
            })}
        </ContainerRecipesStyled>
    )
}

export default ContainerRecipes
