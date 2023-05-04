

const Card = ({name, image, summary})=> {
    return(
        <div>
            <p>Name: {name}</p>
            <img src={image} alt="" />
            <p>Summary: {summary}</p>
        </div>
    )
}

export default Card
