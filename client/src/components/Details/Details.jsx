import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import getPageDetail from "../../redux/actions";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getPageDetail(id));
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch, id]);

  const data = useSelector((state) => state.details);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {console.log(data)}
        <div key={data.id}>
          <h1>{data.name}</h1>
          <span>{data.healthScore}</span>
          <p>Diets</p>
          <img src={data.image} alt="" />
          <p>{data.summary}</p>

        </div>
    </div>
  );
}

export default Details;
