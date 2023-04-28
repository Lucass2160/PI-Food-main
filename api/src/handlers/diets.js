const getDietsController = require("../controllers/diets.js");

const getDiets = async (req, res) => {
  try {
    const allDiets = await getDietsController();
    res.status(200).json(allDiets);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDiets;
