import { useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import style from "./searchbar.module.css"

const SearchBar = () => {
  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  const reset = () => {
    return window.location.reload();
  };

  const buscar = (search) => {
    if (search === "") {
      alert("Ingrese una receta");
    } else {
      axios
        .get(`http://localhost:3001/recipes?name=${search}`)
        .then((res) => {
          setRecipes(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  /** MANEJADORES DE EVENTOS **/
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    buscar(search);
    setSearch("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search info"
          value={search}
          onChange={handleChange}
        />
        <input type="submit" value="Search" onClick={submitHandler} className={style.input} />
      </div>

      <div className={style.aaa}>
        {recipes.map((elemento) => {
          return (
            <Card
              name={elemento.name}
              image={elemento.image}
              diets={elemento.diets}
            />
          );
        })}
      </div>

      {Object.keys(recipes).length > 0 ? (
        <input type="submit" onClick={reset} value="Reset"  />
      ) : null}
    </>
  );
};

export default SearchBar;
