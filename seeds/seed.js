
const sequelize = require("../config/connection");
const { User, Post, Game, FavoriteGame } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");
const gameData = require('./gameData.json');
const favoriteGameData = require('./favoriteGameData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  for (const game of gameData) {
    await Game.create({
      ...game,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const favoriteGames = await FavoriteGame.bulkCreate(favoriteGameData, {
    individualHooks: true,
    returning: true,
  });
  

  process.exit(0);
};

seedDatabase();
