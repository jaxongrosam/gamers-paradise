const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class gameData extends Model {}

gameData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    developer: {
      type: DataTypes.STRING,
    },
    platform: {
      type: DataTypes.STRING,
      validate: {
        // TODO: figure out how to allow the user to pick from options and validate that the answer is only from the given options
      },
    },
    release_date: {
      type: DataTypes.DATE,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "gameData",
  }
);

module.exports = gameData;
