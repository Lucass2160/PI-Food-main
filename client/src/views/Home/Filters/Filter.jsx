import { useDispatch } from "react-redux";
import {
  orderByaz,
  orderByscore,
  filterBydiet,
  filtercreated,
} from "../../../redux/actions";
import "./filter.css"

export default function Filter({diet, setorder, setscore}) {
  
  console.log(diet, "enviado");
  const dispatch = useDispatch();

  function handleOderByname(e) {
    dispatch(orderByaz(e.target.value));
    setorder(e.target.value);
  }
  
  function handleOrderScore(e) {
    dispatch(orderByscore(e.target.value));
    setscore(e.target.value);
  }

  function handleFilterDiets(e) {
    dispatch(filterBydiet(e.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filtercreated(e.target.value));
  }

  /* corregir handle reset filter */
  function handleClick(e) {
    /*  dispatch(getAllrecipes()); */
    window.location.reload(false);
  }

  return (
    <div className="container__filtros">
      {/* ------------Ordenar de a-z z-a------------ */}
      <select className="selectors" onChange={handleOderByname} name="orderaz" id="orderaz">
        <option value="asc">A-Z</option>
        <option value="des">Z-A</option>
      </select>
      {/*-------------All dietas al select------------ */}
      <select className="selectors" onChange={handleFilterDiets} name="diet" id="diet">
        <option value="defauls" disabled>
          seleccione..
        </option>
        <option value="all" defaultValue>
          All
        </option>
        {diet.map((el) => (
          <option value={el} key={el}>
            {el.toUpperCase()}
          </option>
        ))}
      </select>

      {/* Filtrar por puntaje Score */}
      <select className="selectors2" onChange={handleOrderScore} name="score" id="score">
        <option value="asc">Lower</option>
        <option value="des">Higher</option>
      </select>

      {/* filtrar los de la base de dtaos */}
      <select className="selectors2" name="ifoapidb" onChange={handleFilterCreated}>
        <option value="all" defaultValue>
          All
        </option>
        <option value="api">Api</option>
        <option value="created">Created</option>
      </select>

      <button className="rest" onClick={handleClick}>Reset Filter</button>
    </div>
  );
}
