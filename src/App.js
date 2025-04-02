import RecipeBook from "./Components/recipeBook";
import RecipeForm from "./Components/recipe-form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeBook/>} />
        <Route path="addRecipe" element={<RecipeForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
