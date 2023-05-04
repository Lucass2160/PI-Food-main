import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_ID = "GET_RECIPES_ID";

export const getRecipes = () => {
  return async function (dispatch) {
    const recipes = await axios.get("http://localhost:3001/recipes");
    const recipe = recipes.data;
    dispatch({ type: GET_RECIPES, payload: recipe });
  };
};

export const getRecipeById = (id) => {
  return async function (dispatch) {
    const recipeId = await axios.get(`http://localhost:3001/recipes/${id}`);
    const idrepcipe = recipeId.data;
    dispatch({ type: GET_RECIPES_ID, payload: idrepcipe });
  };
};
