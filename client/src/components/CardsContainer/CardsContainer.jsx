import Card from "../Card/Card"
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./cardsc.css"

const CardsContainer = () => {
  const recipes = useSelector((state) => state.recipes);

  //Paginado
  const [currentPage, setCurrentPage]= useState(0)
  const filterRecipes = recipes.slice(currentPage, currentPage + 9)
  const nextPage = () => {
      setCurrentPage(currentPage + 9)
  }
  const prevPage = () => {
      if (currentPage > 0)
      setCurrentPage(currentPage - 9)
  }

  return (
    <>
    <div className="container">
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