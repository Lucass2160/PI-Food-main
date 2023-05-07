import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import Filter from './Filters/Filter';
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDiet } from "../../redux/actions"
import { getRecipes } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SerachBar";
import("./home.css");

const Home = () => {
  const allDiet = useSelector((state) => state.diets);
  console.log(allDiet, "dietas")  
  console.log()

  const [order, setOrder] = useState(''); //para guardar los ordenamientos
  const [socre, setScore] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getAllDiet())
  }, [dispatch]);




  return (
    
    <>
      <div className="searchBar">
        <SearchBar />
      </div>

      

      <div>
        <div>
          <Filter diet={allDiet} setorder={setOrder} setscore={setScore} />
          
        </div>
      </div>

      <h1>Foods</h1>

      <CardsContainer />
    </>
  );
};

export default Home;
