import styled from 'styled-components'

const FormIngreidientsStyled = styled.form`
    width: 100%;
    background-color: var(--white);
    border-radius: 0.5rem;
    padding-inline: 2rem;
    padding-block: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    margin: 2rem 0;
    @media (max-width: 600px) {
        &{
            flex-direction: column;
        }
    
    }
`

function FormIngreidients() {
    return (
        <FormIngreidientsStyled>
            
        </FormIngreidientsStyled>
    )
}

export default FormIngreidients
