const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const gameRoutes = require("./gameDataRoutes");

router.use("/users", userRoutes);
router.use("/post", postRoutes);
router.use("/games", router);

module.exports = router;
