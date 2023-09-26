const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Image extends Model {}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     // references: {
    //     //   model: "user", 
    //     //   key: 'id', 
    //     // }, 
    // },
    // game_id: DataTypes.INTEGER,
    // // references: {
    // //     model: "gameData", 
    // //     key: 'id', 
    // //   },
  },
  {
    sequelize,
    modelName: 'Image',
  }
);

module.exports = Image;