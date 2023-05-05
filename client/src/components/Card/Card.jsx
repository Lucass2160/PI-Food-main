

const Card = ({id, name, image, diets})=> {
    console.log(name)
    return(
        <div>
            <p>Name: {name}</p>
            <img src={image} alt="" />
            <p>Diets: {diets}</p>
        </div>
    )
}

export default Card
