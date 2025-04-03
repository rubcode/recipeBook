import styled from 'styled-components'
import { FaMugHot } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa6";
import { FaCakeCandles } from "react-icons/fa6";
import { BiSolidBowlHot } from "react-icons/bi";

const ContainerDetailsStyled = styled.div`
    width: 80%;
    background-color: var(--white);
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 1rem;
    .box-img {
        width: 100%;
        height: 250px;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
    .box-content { 
        padding: 2.5rem;
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
    const ingrendients = (recipe !== undefined) ? recipe.ingredients : "";

    const iconsCategory = {
        "Entradas": <FaBowlFood className='icon' />,
        "Fuertes": <FaPizzaSlice className='icon' />,
        "Sopas": <BiSolidBowlHot className='icon' />,
        "Postres": <FaCakeCandles className='icon' />,
        "Bebidas": <FaMugHot className='icon' />,
    }
    return (
        (recipe === undefined) ? <h2>No se encontro la receta</h2> :
        <ContainerDetailsStyled>
            <div className='box-img'>
                <img src={recipe.url_image} alt='food' />
            </div>
            <div className='box-content'>
                <div className='box-title'>
                    <h2 className='title-recipe'>{recipe.name_recipe}</h2>
                    <h2 className='category-recipe'>{iconsCategory[recipe.name_category]} {recipe.name_category}</h2>
                </div>
                <div className='box-description'>
                    <h3>Ingredientes 🥕🧅🍤</h3>
                    {
                        (ingrendients.length === 0) ? <p>No hay ingredientes</p> : 
                        <ul className='list-ingrendients'>
                            {
                                ingrendients.map((ingredient, index) => (
                                    <li key={index}>
                                        🔷  {ingredient.name_ingredient}
                                    </li>
                                ))
                            }
                        </ul>
                    }
                    
                    <h3>Preparación 👩🏻‍🍳</h3>
                    <p>{recipe.preparation}</p>
                </div>
            </div>
        </ContainerDetailsStyled>
    )
}

export default ContainerDetails
