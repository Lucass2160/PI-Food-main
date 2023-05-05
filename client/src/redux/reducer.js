import { GET_RECIPES } from "./actions";
import { GET_RECIPE_DETAIL } from "./actions";
import { SEARCH_NAME_RECYPE } from "./actions";
import { FILTER_BY_DIET } from "./actions";
import { GET_ALL_DIET } from "./actions";

const initialState = {
  recipes: [],
  details: {},
  diets: [],
  page: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload };
    case GET_RECIPE_DETAIL:
      return { ...state, details: action.payload };

    case SEARCH_NAME_RECYPE: {
      return {
        ...state,
        recipes: action.payload,
        page: state.page < action.payload.length ? state.page : 1,
      };
    }
    case FILTER_BY_DIET: {
      const recipes = state.recipes;
      const recipesFilterdiet =
        action.payload === "all"
          ? recipes
          : recipes.filter((e) => {
              let names = e.diets.map((d) => d.name);
              if (names.includes(action.payload)) return e;
            });
      return {
        ...state,
        recipes: recipesFilterdiet,
        page: state.page < recipesFilterdiet.length ? state.page : 1,
      };
    }
    case GET_ALL_DIET: {
      return {
        ...state,
        diets: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
