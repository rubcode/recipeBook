import styled from 'styled-components'
import ButtonFilter from '../buttons/button-filter'
import { FaMugHot } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa6";
import { FaCakeCandles } from "react-icons/fa6";
import { BiSolidBowlHot } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { useState } from 'react';

const ContainerFiltersStyled = styled.div`
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 600px) {
        &{
            justify-content: center;
        }
    
    }
`


function ContainerFilters({...props}) {
    const [tabActive, setTabActive] = useState('Todos')
    function changeTab(tab){
        setTabActive(tab)
        if(tab === 'Todos'){
            props.setRecipesFiltered(props.recipes)
            return
        }
        const recipesFiltered = props.recipes.filter(recipe => recipe.name_category === tab)
        props.setRecipesFiltered(recipesFiltered)

    }
    return (
        <ContainerFiltersStyled>
            <ButtonFilter 
                textFilter='Todos' 
                isActive={tabActive === 'Todos' ? true : false}
                onClick={() => changeTab('Todos')}
                icon={<FaStore  className='icon' />}
            />
            <ButtonFilter 
                textFilter='Entradas' 
                isActive={tabActive === 'Entradas' ? true : false}
                onClick={() => changeTab('Entradas')}
                icon={<FaBowlFood className='icon' />}
            />
            <ButtonFilter 
                textFilter='Sopas' 
                isActive={tabActive === 'Sopas' ? true : false}
                onClick={() => changeTab('Sopas')}
                icon={<BiSolidBowlHot  className='icon' />}
            />
            <ButtonFilter 
                textFilter='Fuertes' 
                isActive={tabActive === 'Fuertes' ? true : false} 
                onClick={() => changeTab('Fuertes')}
                icon={<FaPizzaSlice className='icon' />}
            />
            <ButtonFilter 
                textFilter='Postres' 
                isActive={tabActive === 'Postres' ? true : false}
                onClick={() => changeTab('Postres')}
                icon={<FaCakeCandles className='icon' />}
            />
            <ButtonFilter 
                textFilter='Bebidas' 
                isActive={tabActive === 'Bebidas' ? true : false} 
                onClick={() => changeTab('Bebidas')}
                icon={<FaMugHot className='icon' />}
            />
        </ContainerFiltersStyled>
    )
}

export default ContainerFilters
