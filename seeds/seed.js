
const sequelize = require("../config/connection");
const { User, Post, Game, Image } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");
const gameData = require('./gameData.json');
const imageData = require('./imageData.json');


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

  for (const imageDataItem of imageData) {
    await Image.create({
      ...imageDataItem,
      user_id: users.find(user => user.id === imageDataItem.user_id).id,
    });
  }


  process.exit(0);
};

seedDatabase();
