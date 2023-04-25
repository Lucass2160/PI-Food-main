const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    healtScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intrunction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};