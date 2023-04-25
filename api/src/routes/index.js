const { Router } = require("express");
const recipesMiddleware = require("./middleware/recipe.js");
const dietsMiddleware = require("./middleware/diets.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipesMiddleware);
router.use("/recipes", dietsMiddleware);

module.exports = router;
