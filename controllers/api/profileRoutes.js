const router = require("espress").Router();
const { Profile } = require("../../models");
const withAuth = require("../../utils/auth");

//GET /api/profile

router.get("/", withAuth, async (req, res) => {
  try {
    const profileData = await Profile.findAll({
      where: { user_id: req.session.user_id },
    });
    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newProfile = await Profile.create({
      user_id: req.session.user_id,
      picture: req.body.picture,
      wishlist: req.body.wishlist,
      favorites: req.body.favorites,
    });
    res.status(200).json(newProfile);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/", withAuth, async (res, req) => {
  try {
    const updatedProfile = await Profile.update({
      user_id: req.session.user_id,
      picture: req.body.picture,
      wishlist: req.body.wishlist,
      favorites: req.body.favorites,
    });
    res.status(200).json(updatedProfile);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
