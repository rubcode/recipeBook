import styled from 'styled-components'
import { useRef, useState } from 'react';
import InputText from './input';
import TextArea from './text-area';
import { Button } from '../buttons/button';
import Select from './select';
import { addRecipe } from '../../services/recipes';

const FormRecipeStyled = styled.form`
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

function FormRecipe({...props}) {
    const form = useRef(null)
    const [recipe, setRecipe] = useState({
        nameRecipe: '',
        urlImage: '',
        idCategory: '',
        preparation: ''
    });

    function handleChange(e){
        console.log("Evento detectado:", e.target.name, e.target.value); 
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(form.current)
        const newRecipe = {
            nameRecipe: formData.get('nameRecipe'),
            urlImage: formData.get('urlImage'),
            idCategory: formData.get('idCategory'),
            preparation: formData.get('preparation'),
            status: 1
        }
        console.log(newRecipe);
        const {data, isError} = await addRecipe(newRecipe)
        if(isError){
            console.log('Ocurrio un error al añadir la receta');
            return
        }
        console.log(data);
        if(data.code === "000"){
            console.log('Receta añadida correctamente');
            form.current.reset()
        }
    }

    return (
        <FormRecipeStyled ref={form} onSubmit={handleSubmit}>
            <InputText
                placeholder='Nombre de la receta'
                name='nameRecipe'
                type='text'
                value={recipe.nameRecipe}
                onChange={handleChange}

            />
            <InputText
                placeholder='URL de la imagen'
                name='urlImage'
                type='text'
                value={recipe.recipeImage}
                onChange={handleChange}
                
            />
            <Select name="idCategory" value={recipe.idCategory} onChange={handleChange}>
                <option value=''>Selecciona una categoría</option>
                <option value='4'>Bebida</option>
                <option value='1'>Plato Fuerte</option>
                <option value='3'>Postre</option>
                <option value='2'>Sopa</option>
            </Select>
            <TextArea 
                placeholder='Preparación de receta'
                name='preparation'
                value={recipe.recipePreparation}
                onChange={handleChange}
            />
            <Button
                text='Añadir receta'
            />
        </FormRecipeStyled>
    )
}

export default FormRecipe
