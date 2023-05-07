import { GET_RECIPES } from "./actions";
import { GET_RECIPE_DETAIL } from "./actions";
import { SEARCH_NAME_RECYPE } from "./actions";
import { GET_ALL_DIET } from "./actions";
import { FILTER_BY_DIET } from "./actions";
import { FILTER_DB_OR_API } from "./actions";
import { ORDER_BY_NAME } from "./actions";
import { ORDER_BY_SCORE } from "./actions";

const initialState = {
  recipes: [],
  allRecipes: [],
  details: {},
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload, allRecipes: action.payload };

    case GET_RECIPE_DETAIL:
      return { ...state, details: action.payload };

    case SEARCH_NAME_RECYPE: {
      return {
        ...state,
        recipes: action.payload,
        page: state.page < action.payload.length ? state.page : 1,
      };
    }

    case GET_ALL_DIET: {
      return {
        ...state,
        diets: action.payload,
      };
    }
    case ORDER_BY_NAME:
      /* localeCompare */
      let sortArray =
        action.payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (a.name < b.name) {
                return -1;
              } else return 0;
            })
          : /* forma desendente DES */
            state.recipes.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              else return 0;
            });

      return {
        ...state,
        allRecipes: sortArray,
        page: 1,
      };

    case ORDER_BY_SCORE: {
      let sortscore =
        action.payload === "asc"
          ? state.recipes.sort(function (a, b) {
              console.log(a, "este es a");
              if (a.healthScore > b.healthScore) return 1;
              if (a.healthScore < b.healthScore) return -1;
              else return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) return -1;
              if (a.healthScore < b.healthScore) return 1;
              else return 0;
            });

      return {
        ...state,
        allRecipes: sortscore,
        page: 1,
      };
    }
    case FILTER_BY_DIET:
      const all = state.allRecipes;
      const recipesFilterdiet =
        action.payload === "all"
          ? all
          : all.filter((el) => el.diets.includes(action.payload));
      return {
        ...state,
        recipes: [...recipesFilterdiet],
        page: state.page < recipesFilterdiet.length ? state.page : 1,
      };

    case FILTER_DB_OR_API: {
      const allcreated = state.allRecipes;
      const createFilter =
        action.payload === "created"
          ? allcreated.filter((el) => el.createIndb === true)
          : allcreated.filter((el) => el.createIndb === false);

      return {
        ...state,
        recipes: action.payload === "all" ? state.allRecipes : createFilter,
        page: 1,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
