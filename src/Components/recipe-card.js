import styled from 'styled-components'

const RecipeCardStyled = styled.div`
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: 0.3s;
    .box-img {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
    .box-img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .box-info {
        padding: 1rem;
        text-align: center;
    }
    .box-info a{
        text-decoration: none;
    }
    .box-info a:hover h2{
        transform: scale(1.1);
    }
    .box-info h2 {
        color: var(--accentColor);
        font-size: 1.2rem;
        transition: all 0.3s;
    }
`

function RecipeCard({...props}) {
    const path = 'Recipes/' + props.idRecipe
    return (
        <RecipeCardStyled key={props.idRecipe}>
            <div className='box-img'>
                <img src={props.recipeImage} alt='Imagen de la receta' />
            </div>
            <div className='box-info'>
                <a href={path}><h2>{props.recipeName}</h2></a>            
            </div>
        </RecipeCardStyled>
    )
}

export default RecipeCard
