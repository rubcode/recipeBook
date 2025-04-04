import styled from 'styled-components'
import InputText from './input';
import { Button } from '../buttons/button';
import { useRef, useState } from 'react';
import {addIngredients} from '../../services/ingredients';

const FormIngredientStyled = styled.form`
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
    async function handleSubmitIng(e){
        e.preventDefault();
        const formData = new FormData(form.current)
        const newIngredient = {
            nameIngredient: formData.get('nameIngredient'),
            idRecipe: props.idRecipe,
            status: 1
        }
        console.log(newIngredient);
        if(newIngredient.idRecipe !== 0){
            const {data, isError} = await addIngredients(newIngredient)
            console.log(data);
            if(isError){
                console.log('Ocurrio un error al añadir ingrediente');
                return
            }
            if(data.code === "000"){
                console.log('Ingrendiente añadido correctamente');
                form.current.reset()
            }
        }
        console.log('No se ha seleccionado una receta');
    
    }
    return (
        <FormIngredientStyled ref={form} onSubmit={handleSubmitIng}>
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
