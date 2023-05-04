import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    titulo: "",
    puntuacion: "",
    resumen: "",
    imagen: "",
    dietas: "",
    pasos: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const [errors, setErrors] = useState({
    titulo: "",
    puntuacion: "",
    resumen: "",
    imagen: "",
    dietas: "",
    pasos: "",
  });



  const validate = (form) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.text(form.titulo)) {
      console.log("error");
    } else {
      console.log("email valido");
    }
  };

  return (
    <>
      <form>
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
          <input
            type="text"
            value={form.dietas}
            onChange={changeHandler}
            name="dietas"
          />
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
