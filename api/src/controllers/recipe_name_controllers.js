const axios = require("axios");
const { Router } = require("express");
const getRecipeById = Router();
const { API_KEY } = process.env;

const { Recipe } = require("../db");
// const getRecipeById = async (id, API_KEY) => {
//   try {
//     const response = await axios.get(
//       `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
//     );
//     const recipeData = response.data;
//     const recipe = {
//       id: recipeData.id,
//       name: recipeData.title,
//       image: recipeData.image,
//       summary: recipeData.summary,
//       healScore: recipeData.healScore,
//       instruction: recipeData.instruction,
//     };
//     return recipe;
//   } catch (error) {
//     throw new Error("Error al obtener la receta desde la API");
//   }
// };

module.exports = getRecipeById;
