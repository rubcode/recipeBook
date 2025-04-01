import Layout from "./Components/layout";
import ContainerRecipes from "./Components/container-recipes";
import ContainerFilters from "./Components/container-filters";
import {useState,useEffect} from 'react'
import {getRecipes} from './services/recipes'
import { Button } from "./Components/buttons/button";
import { FaBook } from "react-icons/fa6";


function App() {
  const [recipes,setRecipes] = useState([])

  useEffect(()=>{
    getRecipes().then(({data,isError})=>{
      if(isError){
        console.log('Ocurrio un error al obtener las recetas');
        return
      }
      setRecipes(data)
    });
  },[])



  return (
    <div className="App">
      <Layout>
        <h1 className="title">El recetario de Rub</h1>
        <ContainerFilters/>
        <ContainerRecipes 
          recipes={recipes}
        />
        <Button 
          link='Recipes'
          text={<FaBook/>}
          className='buttonRouded'
        />
      </Layout>
    </div>
  );
}

export default App;
