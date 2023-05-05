import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const SEARCH_NAME_RECYPE = "SEARCH_NAME_RECYPE";
export const SET_ERROR = "SET_ERROR";
export const GET_ALL_DIET = "GET_ALL_DIET";

export const getRecipes = () => {
  return async function (dispatch) {
    const recipes = await axios.get("http://localhost:3001/recipes");
    dispatch({ type: GET_RECIPES, payload: recipes.data });
  };
};

function getPageDetail(id) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/recipes/${id}`);
    dispatch({ type: GET_RECIPE_DETAIL, payload: response.data });
  };
}

export function filterBydiet(diet) {
  return {
    type: FILTER_BY_DIET,
    payload: diet,
  };
}

export function getAllDiet() {
  return async function (dispatch) {
    try {
      var dietas = await axios.get("http://localhost:3001/diets");
      return dispatch({
        type: GET_ALL_DIET,
        payload: dietas.data,
      });
    } catch (error) {
      console.log("No se Han podido cargar las dietas");
    }
  };
}

// export const getNamerecipes = (name) => {
//   return async function (dispatch) {
//     try {
//       let response = await axios.get(
//         `http://localhost:3001/recipes?name=${name}`
//       );
//       return dispatch({
//         type: SEARCH_NAME_RECYPE,
//         payload: response.data,
//       });
//     } catch (err) {
//       dispatch({ type: SET_ERROR, payload: err });
//     }
//   };
// };

export default getPageDetail;
