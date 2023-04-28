const { Router } = require("express");
const getDiets = require("../handlers/diets");
const router = Router();

router.get("/", getDiets);

module.exports = router;
