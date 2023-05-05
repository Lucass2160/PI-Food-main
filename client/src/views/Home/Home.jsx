import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import  {getRecipes}  from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SerachBar";

const Home = () => {

  
  const dispatch = useDispatch();
  useEffect(() => {
     console.log(getRecipes())
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      
      <h1>Vista del Home</h1>
      <SearchBar/>
      <CardsContainer />
      
    </>
  );
};

export default Home;
