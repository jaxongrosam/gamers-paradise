const express = require("express");
const router = express.Router();
const withAuth = require("../../utils/auth");

// Define a route to add a favorite game
router.post("/", withAuth, async (req, res) => {
  try {
    // Retrieve userId and gameId from the request body or session
    const { userId, gameId } = req.body; // Assuming you're sending this data in the request body

    // Create a new entry in the FavoriteGame model
    const favoriteGame = await FavoriteGame.create({
      userId: userId,
      gameId: gameId,
    });

    res.status(200).json({ message: "added successfully.", favoriteGame });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "An error occurred while adding the favorite game." });
  }
});

//still needs work. 
router.get("/:id", async (req, res) => {
  try {
    const gameId = req.params.id; // Get the game ID from the URL parameters

    // Find the game by its primary key (ID)
    const oneGame = await gameData.findByPk(gameId);

    if (!oneGame) {
      res.status(404).json({ message: "Game not found." });
      return;
    }

    res.status(200).json(oneGame);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "An error occurred while retrieving the game." });
  }
});

module.exports = router;
