const router = require("express").Router();
const { gameData } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newGame = await gameData.create({
      ...req.body,
    });
    res.status(200).json(newGame);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all games
router.get("/", async (req, res) => {
  try {
    const allGames = await gameData.findAll();
    res.status(200).json(allGames);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const oneGame = await gameData.findByPk(req.params);
    if (!oneGame) {
      res
        .status(404)
        .json({ message: "Sorry, I don't see any games with that id." });
      return;
    }
    res.status(200).json(oneGame);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
