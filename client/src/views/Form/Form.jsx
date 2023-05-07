import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllDiet } from "../../redux/actions";
// import validation from "./validaciones";

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDiet());
  }, [dispatch]);

  const data = useSelector((state) => state.diets);

  const [form, setForm] = useState({
    name: "",
    healthScore: "",
    summary: "",
    image: "",
    diets: [],
    steps: "",
  });
  console.log(form);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const [check, setCheck] = useState([]);
  console.log(check, "1");

  const changeHandlerDietas = (event) => {
    const value = event.target.value;
    const property = event.target.name;

    if (event.target.checked) {
      setCheck([...check, value]);
      setForm({ ...form, [property]: [...form[property], value] });
    } else {
      setCheck(check.filter((item) => item !== value));
      setForm({
        ...form,
        [property]: form[property].filter((item) => item !== value),
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/recipes", form)
      .then(() => alert("Se envio correctamente"));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>Titulo:</label>
          <input
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
          />
        </div>
        <div>
          <label>Puntuación de salud:</label>
          <input
            type="range"
            max={100}
            min={1}
            value={form.healthScore}
            onChange={changeHandler}
            name="healthScore"
          />
        </div>
        <div>
          <label>Resumen:</label>
          <input
            type="text"
            value={form.summary}
            onChange={changeHandler}
            name="summary"
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            value={form.image}
            onChange={changeHandler}
            name="image"
          />
        </div>
        <div>
          <label>Dietas:</label>
          {data.map((diet) => {
            return (
              <>
                <label>{diet}</label>
                <input
                  type="checkbox"
                  value={diet}
                  onChange={changeHandlerDietas}
                  name="diets"
                />
              </>
            );
          })}
        </div>
        <div>
          <label>Pasos:</label>
          <input
            type="text"
            value={form.steps}
            onChange={changeHandler}
            name="steps"
          />
        </div>
        <button type="submit">ENVIAR</button>
      </form>
    </>
  );
};

export default Form;
