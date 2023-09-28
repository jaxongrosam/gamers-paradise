const User = require("./User");
const Post = require("./Post");
const Game = require('./gameData');
const Image = require('./image');

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

module.exports = { User, Post, Game, Image };
