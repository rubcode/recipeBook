import styled from 'styled-components'

const ButtonFilterStyled = styled.button`
    padding: 0.5rem;
    width: 80px;
    height: 80px;
    background-color: var(--white);
    border: 1px solid var(--accentColor);
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: 0.5s;
    color: var(--accentColor);
    cursor: pointer;
    &.active{
        background-color: var(--accentColor);
        color: var(--whiteColor);
    }
    &:hover{
        background-color: var(--accentColor);
        color: var(--whiteColor);
    }
    .icon{
        font-size: 1.3rem;
    }
`

function ButtonFilter({...props}) {
    return (
        <ButtonFilterStyled className={(props.isActive) ? "active" : ""} type='button' onClick={props.onClick}>
            {props.icon}
            {props.textFilter}
        </ButtonFilterStyled>
    )
}

export default ButtonFilter
