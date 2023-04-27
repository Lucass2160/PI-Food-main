const axios = require("axios");
const { Router } = require("express");
const recipesModelsName = Router();
const { Recipe, Diets } = require("../db");
const { Op } = require("sequelize");

recipesModelsName.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    // Buscar los videojuegos en la base de datos
    const recipeAll = await Recipe.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
      include: Diets,
    });
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/search?apiKey=1ca2f2e0158a4007b974f8038badf39c&query=${name}&addRecipeInformation=true`
    );
    console.log(response);
    const recipe = {
      id: data.id,
      name: data.title,
      image: data.image,
    };
  } catch (error) {
    res.status(404).json({ error: "pis" });
  }
});
module.exports = recipesModelsName;
