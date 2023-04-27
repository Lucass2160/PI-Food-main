const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { API_KEY } = process.env;

const getIdRecipes = async (id, next) => {
  if (id.includes("-")) {
    try {
      const dbRecipe = await Recipe.findOne({ where: { id: id } });
      return {
        id: dbRecipe.id,
        name: dbRecipe.title,
        image: dbRecipe.image,
        diets: dbRecipe.diets,
        summary: dbRecipe.summary,
        healScore: dbRecipe.healScore,
        diets: dbRecipe.diets?.map((e) => e.name),
      };
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const { data } = await axios(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=1ca2f2e0158a4007b974f8038badf39c`
      );
      return {
        id: data.id,
        name: data.title,
        image: data.image,
        diets: data.diets,
        summary: data.summary,
        healScore: data.healthScore,
        diets: data.diets,
        steps: data.analyzedInstructions[0]?.steps.map((e) => {
          return {
            number: e.number,
            step: e.step,
          };
        }),
      };
    } catch (error) {
      next(error);
    }
  }
};

module.exports = getIdRecipes;
