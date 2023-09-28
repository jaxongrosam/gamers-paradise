const router = require("express").Router();

const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const gameDataRoutes = require("./gameDataRoutes");
const imageRoutes = require("./imageRoutes");
const favoriteGame = require("./favoriteGameRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/games", gameDataRoutes);
router.use("/upload", imageRoutes);
router.use("/favoriteGame", favoriteGame);

module.exports = router;