const { Router } = require("express");
const router = Router();
const { Recipe, Diet } = require("../db");
const getIdRecipes = require("../controllers/recipe.js");

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  const idRecipe = await getIdRecipes(id, next);
  return res.send(idRecipe);
});

module.exports = router;
