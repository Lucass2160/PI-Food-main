import "./card.css";

const Card = ({ name, image, diets }) => {
  console.log(name);
  function primeraLetraMayusculaYComa(array) {
    return array?.map(function(elemento, index) {
      if (index === array.length - 1) {
        // Si es el último elemento, solo se capitaliza la primera letra sin agregar una coma
        return elemento.charAt(0).toUpperCase() + elemento.slice(1);
      } else {
        // Si no es el último elemento, se capitaliza la primera letra y se agrega una coma al final
        return elemento.charAt(0).toUpperCase() + elemento.slice(1) + ",";
      }
    }).join(" ");
  }
  return (
    <div className="card">
      <p className="title">{name}</p>
      <img src={image} alt="" className="img" />

      <p className="diets">{primeraLetraMayusculaYComa(diets)}</p>
    </div>
  );
};

export default Card;
