import Card from "../Card/Card"
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardsContainer = () => {
  const recipes = useSelector((state) => state.recipes);

  //Paginado
  const [currentPage, setCurrentPage]= useState(0)
  const filterRecipes = recipes.slice(currentPage, currentPage + 10)
  const nextPage = () => {
      setCurrentPage(currentPage + 10)
  }
  const prevPage = () => {
      if (currentPage > 0)
      setCurrentPage(currentPage - 10)
  }

  return (
    <>
    <div>
      {filterRecipes.map((recipes) => {
        return <>
        <div>
        <Card
        name = {recipes.name}
        image = {recipes.image}
        diets = {recipes.diets}
        />
        
        {<Link to={`/recipes/${recipes.id}`}>Saber mas</Link>}
        
        </div>
        
        </>
      })}

      
    </div>
    <div>
        <button onClick={prevPage}>Anterior</button>
        <button onClick={nextPage}>Siguiente</button>
    </div>
    </>
  );
};

export default CardsContainer