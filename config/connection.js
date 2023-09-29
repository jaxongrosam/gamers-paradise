const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

sequelize = new Sequelize(
  "mysql://p1da5qatqhyae1ko:athk7vq568tz0ow7@n4m3x5ti89xl6czh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zqyn9ozyhneahp5o"
);
// if (process.env.JAWSDB_URL) {
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: "localhost",
//       dialect: "mysql",
//       port: 3306,
//     }
//   );
// }

module.exports = sequelize;
