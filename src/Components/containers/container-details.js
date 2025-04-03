import styled from 'styled-components'
import { FaBowlFood } from "react-icons/fa6";

const ContainerDetailsStyled = styled.div`
    width: 80%;
    background-color: var(--white);
    margin: 0 auto;
    .box-img {
        width: 100%;
        height: 200px;
    }
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .box-content { 
        padding: 1.5rem 2.5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
    }
    .box-title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title-recipe{
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 1px;
        color: var(--accentColor);
    }
    .category-recipe{
        font-size: 1.2rem;
        color: var(--accentColor);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    .box-description{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1.5rem;
    }
    .list-ingrendients li{
        list-style: none;
    }
    p{
        line-height: 2rem;
        text-align: justify;
    }
`

function ContainerDetails({...props}) {
    const recipe = props.recipes.find(recipe => recipe.id_recipe === parseInt(props.idRecipe))
    return (
        (recipe === undefined) ? <h2>No se encontro la receta</h2> :
        <ContainerDetailsStyled>
            <div className='box-img'>
                <img src={recipe.url_image} alt='food' />
            </div>
            <div className='box-content'>
                <div className='box-title'>
                    <h2 className='title-recipe'>{recipe.name_recipe}</h2>
                    <h2 className='category-recipe'><FaBowlFood className='icon' /> {recipe.name_category}</h2>
                </div>
                <div className='box-description'>
                    <h3>Ingredientes 🥕🧅🍤</h3>
                    <ul className='list-ingrendients'>
                        <li>🔷1/2 kg de papas</li>
                        <li>🔷1/2 kg de papas</li>
                        <li>🔷1/2 kg de papas</li>
                    </ul>
                    <h3>Preparación 👩🏻‍🍳</h3>
                    <p>{recipe.preparation}</p>
                </div>
            </div>
        </ContainerDetailsStyled>
    )
}

export default ContainerDetails
