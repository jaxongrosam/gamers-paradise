const router = require("express").Router();
const { Post, User, Game } = require("../models");  //add Image?
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

router.get("/games", async (req, res) => {
try{
  const gameData = await Game.findAll();
  const games = gameData.map((games) => games.get({ plain: true }));

  res.render("games", {
    games,
    logged_in: req.session.logged_in
  });
} 
catch (err){res.status(500).json(err);
}
});
 
router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

// router.get("/upload", (req, res) => {
//   // if (req.session.loggedIn) {
//   //   res.redirect("/");
//   //   return;
//   // }

//   res.render("uploadimage");
// });

//get game by id
router.get("/games/id", async (req, res) => {
  try {
    const oneGame = await gameData.findByPk(req.params.id);
    if (!oneGame) {
      res
        .status(404)
        .json({ message: "Sorry, I don't see any games with that id." });
      return;
    }
    res.render('games');  //wrong?? 
    res.status(200).json(oneGame);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
