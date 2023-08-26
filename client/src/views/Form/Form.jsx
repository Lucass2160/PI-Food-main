import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllDiet } from "../../redux/actions";
import "./form.css";

// import validation from "./validaciones";
<<<<<<< HEAD

=======
>>>>>>> parent of 81ef7f3 (terminado)

const validate = (form) => {
  let error = {};
  if (form.name || form.name === "") {
    if (form.name.length < 5) {
      error.name = "El numero debe tener mas de 5 caracteres";
    } else if (form.name.length > 20) {
      error.name = "El nombre de debe tener mas de 20 caracteres";
    }
  }

  if (form.summary || form.summary === "") {
    if (form.summary.length < 10) {
      error.summary = "El resumen es demasiado corto";
    } else if (form.summary.length > 299) {
      error.summary = "El resumen es demasiado largo.";
    }
  }

  if (form.diets) {
    if (form.diets.length === 0) {
      error.diets = "Debe seleccionar una receta";
    }
  }

  return error;
};

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
    steps: [],
  });

  const [error, setError] = useState({
    name: "",
    healthScore: "",
    summary: "",
    image: "",
    diets: [],
    steps: [],
  });

  console.log(error);

  const changeHandlerDietas = (event) => {
    const value = event.target.value;
    const property = event.target.name;

    if (event.target.checked) {
      setForm({ ...form, [property]: [...form[property], value] });
    } else {
      setForm({
        ...form,
        [property]: form[property].filter((item) => item !== value),
      });
    }
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setError(validate({ ...form, [property]: value }));
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
  console.log(stepsArr, "abc");
  const addStep = (event) => {
    event.preventDefault();
    const newStep = { number: stepsArr.length + 1, step: setpp.steps };
    setSteps([...stepsArr, newStep]);
    setForm({ ...form, steps: [...stepsArr, newStep] });
  };

  const [count, setCount] = useState("");

  useEffect(() => {
    const lastNumber = stepsArr[stepsArr.length - 1]?.number;
    if (lastNumber) {
      setCount(lastNumber);
    }
  }, [stepsArr]);

  const submitHandler = (event) => {
    setError(validate({ ...form, form }));
    event.preventDefault();
    if (!Object.keys(error).length) {
      axios
        .post("http://localhost:3001/recipes", form)
        .then(() => alert("The recipe was created successfully"));
    } else {
      alert("Complete the required fields (*)");
    }
  };

  return (
    <>
      <div className="containerPrincipal">
        <div className="subDiv">
          <form className="subcontainerIzquierdo" onSubmit={submitHandler}>
            <div className="mincontainer">
              <label className="name">Recipe name *:</label>
              <input
                type="text"
                value={form.name}
                onChange={changeHandler}
                name="name"
                className="input"
              />
            </div>

            {error.name && <p className="errors">{error.name}</p>}

            <div className="mincontainer">
              <label className="name">Health Score* :</label>
              <input
                type="range"
                max={100}
                min={1}
                value={form.healthScore}
                onChange={changeHandler}
                name="healthScore"
                className="input"
              />
            </div>

            <div className="mincontainer">
              <label className="name">Summary* :</label>
              <input
                type="text"
                value={form.summary}
                onChange={changeHandler}
                name="summary"
                className="input"
              />
            </div>

            {error.summary && <p className="errors">{error.summary}</p>}

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

            <p className="selecDiets">Select the diets *:</p>

            {error.diets && <p className="errors">{error.diets}</p>}

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

          <form className="mincontainerSteps" onSubmit={addStep}>
            <div>
              <label className="name">Steps: {count + 1} </label>
              <input
                type="text"
                value={setpp.steps}
                onChange={changeHandlersetpp}
                name="steps"
                className="input"
              />
            </div>
            <div>
              <button className="enviar2" type="submit">
                Add step
              </button>
            </div>
          </form>
        </div>

        <div className="subcontainerDerecho">
          <img src="../../img/food.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Form;
