import styled from 'styled-components'

const RecipeCardStyled = styled.div`
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: 0.3s;
    cursor: pointer;
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
    .box-info h2 {
        color: var(--accentColor);
    }
`

function RecipeCard({...props}) {
    return (
        <RecipeCardStyled key={props.key}>
            <div className='box-img'>
                <img src={props.recipeImage} alt='Imagen de la receta' />
            </div>
            <div className='box-info'>
                <h2>{props.recipeName}</h2>
            </div>
        </RecipeCardStyled>
    )
}

export default RecipeCard
