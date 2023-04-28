const axios = require("axios");
const { Recipe, Diets } = require("../db");

const getDietsController = async () => {
  const peticion = await axios(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
};
