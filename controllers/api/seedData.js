const express = require("express");
const router = express.Router();
const withAuth = require("../../utils/auth");
const seedDatabase = require("../../seeds/seed");
// /api/seedData
router.get("/", async (req, res) => {
  seedDatabase();
  res.status(200).json();
});

module.exports = router;
