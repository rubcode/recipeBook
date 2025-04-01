import styled from 'styled-components'
import ButtonFilter from './buttons/button-filter'
import { FaMugHot } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa6";
import { FaCakeCandles } from "react-icons/fa6";

const ContainerFiltersStyled = styled.div`
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
`

function ContainerFilters() {
    return (
        <ContainerFiltersStyled>
            <ButtonFilter 
                textFilter='Entradas' 
                isActive={true} 
                icon={<FaBowlFood className='icon' />}
            />
            <ButtonFilter 
                textFilter='Fuertes' 
                isActive={false} 
                icon={<FaPizzaSlice className='icon' />}
            />
            <ButtonFilter 
                textFilter='Postres' 
                isActive={false} 
                icon={<FaCakeCandles className='icon' />}
            />
            <ButtonFilter 
                textFilter='Bebidas' 
                isActive={false} 
                icon={<FaMugHot className='icon' />}
            />
        </ContainerFiltersStyled>
    )
}

export default ContainerFilters
