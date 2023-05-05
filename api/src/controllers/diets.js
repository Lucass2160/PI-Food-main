const { API_KEY } = process.env;
const axios = require("axios");
const { Diets } = require("../db");

const getDiets = async (req, res) => {
  try {
    const apiDietsRaw = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
      )
    ).data.results;

    let dietasRepetidas = apiDietsRaw.map((elem) => elem.diets).flat(1);

    let dietas = [...new Set(dietasRepetidas)];

    dietas.map(async (dietName) => {
      await Diets.findOrCreate({
        where: { name: dietName },
      });
    });

    return dietas;
  } catch (error) {
    throw new Error("Se acabaron las apikey disponibles");
  }
};

module.exports = {
  getDiets,
};
