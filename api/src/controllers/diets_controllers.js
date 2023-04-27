const axios = require("axios");
const { Router } = require("express");
const recipesModelsId = Router();
const { Recipe } = require("../db");

recipesModelsId.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id.includes("-")) {
      const dbRecipe = await Recipe.findOne({ where: { id: id } });
      const recipe = {
        id: dbRecipe.id,
        name: dbRecipe.title,
        image: dbRecipe.image,
        summary: dbRecipe.summary,
        healScore: dbRecipe.healScore,
        instruction: dbRecipe.instruction,
      };
      res.status(200).json(recipe);
    } else {
      const { data } = await axios(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=1ca2f2e0158a4007b974f8038badf39c`
      );
      const recipe = {
        id: data.id,
        name: data.title,
        image: data.image,
        summary: data.summary,
        healScore: data.healthScore,
        instruction: data.instructions,
      };
      res.status(200).json(recipe);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = recipesModelsId;
