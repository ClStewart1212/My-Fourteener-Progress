const models = require('../models/mountainModels');

const mountainController = {};

//middleware to serve basic mountain info
mountainController.basicMountainInfo = (req, res, next) => {
  const mountainName = req.params.name;
  //use 14er name to access 14er document in user collection
  //return Completion Time, Notes & Photos from document
  if (!mountainName)
    return next({
      log: `characterController.createCharacter ERROR: ${prop} on request body undefined`,
      message: {
        err: 'characterController.createCharacter: ERROR: Incorrect data received',
      },
    });

  res.locals.newCharacter[prop] = req.body[prop];
};
res.locals.userInfo = data;
return next();

module.exports = mountainController;
