import { GET_RECIPES } from "./actions";
import { GET_RECIPE_DETAIL } from "./actions";

const initialState = {
  recipes: [],
  details: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload };
    case GET_RECIPE_DETAIL:
      return { ...state, details: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
