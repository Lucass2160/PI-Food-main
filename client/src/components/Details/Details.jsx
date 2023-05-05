import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getPageDetail from "../../redux/actions";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(getPageDetail(id));
  }, [dispatch]);

  const data = useSelector((state) => state.details);
  console.log(data)



  return (
    <div>
      {console.log(data)}
      {data.map((e) => (
        <div key={e.id}>
          <h1>{e.name}</h1>
          <span>{e.healthScore}</span>
          <p>Diets</p>
          <div>
            {e.diets.map((d) => (
              <div key={d.id}>
                <p>{d.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
