import styled from 'styled-components'
import InputText from './input';
import { Button } from '../buttons/button';
import { useRef, useState } from 'react';

const FormIngredientStyled = styled.div`
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

function FormIngredient({...props}) {
    const form = useRef(null)
    const [ingredient, setIngredient] = useState({
        nameIngredient: '',
        idRecipe: props.idRecipe,
        status: 1
    });

    function handleChange(e){
        setIngredient({
            ...ingredient,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(form.current)
        console.log("hola");
        const newIngredient = {
            nameIngredient: formData.get('nameIngredient'),
            idRecipe: props.idRecipe,
            status: 1
        }
        console.log(newIngredient);
    }
    return (
        <FormIngredientStyled ref={form} onSubmit={handleSubmit}>
            <InputText
                placeholder='Nombre del ingrediente'
                name='nameIngredient'
                type='text'
                value={ingredient.nameIngredient}
                onChange={handleChange}
            />
            <Button
                text='Añadir ingrediente'
            />
        </FormIngredientStyled>
    )
}

export default FormIngredient
