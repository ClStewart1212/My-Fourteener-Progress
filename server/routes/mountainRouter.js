const express = require('express');

//add in any controllers
const mountainControllers = require('../controllers/mountainControllers');

const router = express.Router();

//add routers as needed
router.get('/', mountainControllers.exampleMiddleware, (req, res) => {
  return (
    res
      .status(200)
      //TODO: add middleware res.locals
      .json(res.locals.userData)
  );
});

module.exports = router;
