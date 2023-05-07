import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import Filter from "./Filters/Filter";
import { useSelector, useDispatch } from "react-redux";
import { getAllDiet, getRecipes } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SerachBar";
import "./home.css";

const Home = () => {
  const allDiet = useSelector((state) => state.diets);
  console.log(allDiet, "dietas");
  console.log();

  const [order, setOrder] = useState(""); //para guardar los ordenamientos
  const [score, setScore] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes())
      .then(() => setLoading(false))
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    dispatch(getAllDiet());
  }, [dispatch]);

  return (
    <div className="container">
      {loading ? (
        <div className="searchingContainer">
          <h1 className="searching">Searching Foods...</h1>
        </div>
      ) : (
        <div>
          <div className="searchBar">
            <SearchBar />
          </div>
          <div>
            <div>
              <Filter diet={allDiet} setorder={setOrder} setscore={setScore} />
            </div>
          </div>

          <CardsContainer />
        </div>
      )}
    </div>
  );
};

export default Home;
