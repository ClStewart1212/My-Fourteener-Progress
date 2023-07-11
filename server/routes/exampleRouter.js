const express = require('express');

//add in any controllers
const exampleController = require('../controllers/exampleController');

const router = express.Router();

//TODO: add routers as needed
router.get('/', exampleController.exampleMiddleware, (req, res) => {
  return res
    .status(200)
    .json({ characters: res.locals.ex, favs: res.locals.ex });
});

module.exports = router;
