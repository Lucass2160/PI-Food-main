import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllDiet } from "../../redux/actions";
import "./form.css";

// import validation from "./validaciones";

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDiet());
  }, [dispatch]);

  const data = useSelector((state) => state.diets);

  const [form, setForm] = useState({
    name: "",
    healScore: "",
    summary: "",
    image: "",
    diets: [],
    steps: [],
  });

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

  const [setpp, setsepp] = useState({
    steps: "",
  });

  const changeHandlersetpp = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setsepp({ ...setpp, [property]: value });
  };

  const [stepsArr, setSteps] = useState([]);
  console.log(stepsArr);
  const addStep = (event) => {
    event.preventDefault();
    setSteps([...stepsArr, { number: stepsArr.length + 1, step: setpp.steps }]);
    setForm({ ...form, steps: [...stepsArr] });
  };

  console.log(form);

  const submitHandler = (event) => {
    event.preventDefault();

    axios

      .post("http://localhost:3001/recipes", form)
      .then(() => alert("Se envio correctamente"));
  };

  return (
    <>
      <div className="containerPrincipal">
        <form className="subcontainerIzquierdo" onSubmit={submitHandler}>
          <div className="mincontainer">
            <label className="name">Recipe name:</label>
            <input
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
              className="input"
            />
          </div>
          <div className="mincontainer">
            <label className="name">Health Score:</label>
            <input
              type="range"
              max={100}
              min={1}
              value={form.healScore}
              onChange={changeHandler}
              name="healScore"
              className="input"
            />
          </div>
          <div className="mincontainer">
            <label className="name">Summary:</label>
            <input
              type="text"
              value={form.summary}
              onChange={changeHandler}
              name="summary"
              className="input"
            />
          </div>
          <div className="mincontainer">
            <label className="name">Image:</label>
            <input
              type="text"
              value={form.image}
              onChange={changeHandler}
              name="image"
              className="input"
            />
          </div>

          <div className="check">
            <label></label>
          </div>

          <div className="checkBox">
            {data.map((diet) => {
              return (
                <div className="checkchic">
                  <input
                    type="checkbox"
                    value={diet}
                    onChange={changeHandlerDietas}
                    name="diets"
                  />
                  <label>{diet}</label>
                </div>
              );
            })}
          </div>
          <button className="enviar" type="submit">
            ENVIAR
          </button>
        </form>

        <form className="mincontainer" onSubmit={addStep}>
          <label className="name">Steps: 3</label>
          <input
            type="text"
            value={setpp.steps}
            onChange={changeHandlersetpp}
            name="steps"
            className="input"
          />
          <div>
            <button className="enviar" type="submit">
              Add step
            </button>
          </div>
        </form>

        <div className="subcontainerDerecho">
          <img src="../../img/food.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Form;
