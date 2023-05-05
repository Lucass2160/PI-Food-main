import { useState } from "react";
import axios from "axios";

const Form = () => {
  const diets = [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan",
    "paleolithic",
    "primal",
    "whole 30",
    "pescatarian",
    "ketogenic",
    "fodmap friendly",
  ];
  const [form, setForm] = useState({
    titulo: "",
    puntuacion: "",
    resumen: "",
    imagen: "",
    dietas: [],
    pasos: "",
  });

  console.log(form);

  const changeHandler = (event) => {
    const property = event.target.name;

    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const [check, setCheck] = useState([])


  const changeHandlerDietas = (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      setCheck([...check, value]);
    } else {
      setCheck(check.filter((item) => item !== value));
    }
 
    
  };

  

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/recipes", form)
      .then((res) => alert(res));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>Titulo:</label>
          <input
            type="text"
            value={form.titulo}
            onChange={changeHandler}
            name="titulo"
          />
        </div>
        <div>
          <label>Puntuación de salud:</label>
          <input
            type="text"
            value={form.puntuacion}
            onChange={changeHandler}
            name="puntuacion"
          />
        </div>
        <div>
          <label>Resumen:</label>
          <input
            type="text"
            value={form.resumen}
            onChange={changeHandler}
            name="resumen"
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            value={form.imagen}
            onChange={changeHandler}
            name="imagen"
          />
        </div>
        <div>
          <label>Dietas:</label>
          {diets.map((diet) => {
            return (
              <>
                <label>{diet}</label>
                <input
                  type="checkbox"
                  value={diet}
                  onChange={changeHandlerDietas}
                  name={diet}
                />
              </>
            );
          })}
        </div>
        <div>
          <label>Pasos:</label>
          <input
            type="text"
            value={form.pasos}
            onChange={changeHandler}
            name="pasos"
          />
        </div>
        <button type="submit">ENVIAR</button>
      </form>
    </>
  );
};

export default Form;
