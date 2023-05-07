import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./cardsc.css";

const CardsContainer = () => {
  const recipes = useSelector((state) => state.recipes);
  //Paginado
  const [currentPage, setCurrentPage] = useState(0);
  const filterRecipes = recipes.slice(currentPage, currentPage + 9);
  const nextPage = () => {
    //document.documentElement.scrollTop = 0
    setCurrentPage(currentPage + 9);
  };
  const prevPage = () => {
    //document.documentElement.scrollTop = 0
    if (currentPage > 0) setCurrentPage(currentPage - 9);
  };

  return (
    <>
      <div className="container">
        {filterRecipes.map((recipes) => {
          return (
            <>
              <div className="cardcontainer">
                <Card
                  name={recipes.name}
                  image={recipes.image}
                  diets={recipes.diets}
                />

                {
                  <Link className="sabermas" to={`/recipes/${recipes.id}`}>
                    Learn more
                  </Link>
                }
              </div>
            </>
          );
        })}
      </div>
      <div className="clicks">
        <button className="button" onClick={prevPage}>Anterior</button>
        <button className="button" onClick={nextPage}>Siguiente</button>
      </div>
    </>
  );
};

export default CardsContainer;
