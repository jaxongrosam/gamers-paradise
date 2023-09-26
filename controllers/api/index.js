const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const gameDataRoutes = require("./gameDataRoutes");
const imageRoutes = require("./imageRoutes");

router.use("/users", userRoutes);
router.use("/post", postRoutes);
router.use("/games", gameDataRoutes);
router.use("/image", imageRoutes);

module.exports = router;
