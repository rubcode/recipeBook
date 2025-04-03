import RecipeBook from "./Components/recipeBook";
import RecipeForm from "./Components/recipe-form";
import RecipeDetails from "./Components/recipe-details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeBook/>} />
        <Route path="addRecipe" element={<RecipeForm/>} />
        <Route path="Recipes/:idRecipe" element={<RecipeDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
