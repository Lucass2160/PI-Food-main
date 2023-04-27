const { Router } = require("express");
const recipesModelsId = require("../controllers/recipe_id_controllers");
const recipesModelsName = require("../controllers/recipe_name_controllers");
const diets = require("../controllers/diets_controllers");
const recipePost = require("../controllers/recipe_post_controllers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipe", recipesModelsId);
router.use("/recipes", recipesModelsName);
router.use("/diets", recipePost);

module.exports = router;
