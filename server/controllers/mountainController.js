const { Mountains } = require('../models/mountainModels');

const mountainController = {};

//middleware to get basic mountain info
mountainController.mountains = async (req, res, next) => {
  //getting all basic mountain info
  //this info is independant of users and will be served to every page
  try {
    const mountains = await Mountains.find({});
    res.locals.mountains = mountains;
    return next();
  } catch {
    return next({
      log: `mountainController.basicMountainInfo ERROR: trouble getting mountain data from database`,
      message: {
        err: 'mountainController.basicMountainInfo: ERROR: database error',
      },
    });
  }
};

module.exports = mountainController;
