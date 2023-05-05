import CarsDetails from "../CarsDetails/CarsDetails";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getPageDetail from "../../redux/actions";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    dispatch(getPageDetail(id));
  }, [dispatch]);
const data = useSelector((state) => state.recipesId);

  return (
    <>
      {data.map((e)=>{
        <div>
            console.log({e.name})
            <h1>{e.name}</h1>
        </div>
      })}
    </>
  );
}

export default Details;
