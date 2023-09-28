const User = require("./User");
const Post = require("./Post");
const Game = require('./gameData');
const Image = require('./image');
const FavoriteGame = require('./favoriteGame');

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Image.belongsTo(User, { 
  foreignKey: 'user_id' 
});

// Image.belongsTo(Game, { 
//   foreignKey: 'game_id' 
// });


FavoriteGame.belongsTo(User,{
  foreignKey: "userId", //correct?
});
FavoriteGame.belongsTo(Game,{
  foreignKey: "id",  //correct?
});

module.exports = { User, Post, Game, Image, FavoriteGame };
