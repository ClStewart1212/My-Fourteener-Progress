const express = require('express');

//add in any controllers
const mountainController = require('../controllers/mountainController');

const router = express.Router();

//add routers as needed

//router sends to basicMountainInfo middleware, returns mountainInfo
router.get('/', mountainController.mountains, (req, res) => {
  return res.status(200).json(res.locals.mountains);
});

module.exports = router;
