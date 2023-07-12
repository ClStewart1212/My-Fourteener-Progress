const { Users } = require('../models/mountainModels');

const userController = {};

//middleware to get basic user info
userController.getUserInfo = async (req, res, next) => {
  //getting all basic user info
  const peak = req.query.name;
  if (!peak)
    return next({
      log: `userController.getUserInfo ERROR: fourteener peak name missing`,
      message: {
        err: 'userController.getUserInfo: ERROR: fourteener peak name missing',
      },
    });
  try {
    const userInfo = await Users.find({ peak });
    res.locals.userInfo = userInfo;
    return next();
  } catch {
    return next({
      log: `userController.getUserInfo ERROR: trouble getting user data from database`,
      message: {
        err: 'userController.getUserInfo: ERROR: trouble getting user data from database',
      },
    });
  }
};

userController.postUserInfo = async (req, res, next) => {
  //getting all basic user info
  const peak = req.query.name;
  const { completionDate, completionTime } = req.body;
  if (!peak)
    return next({
      log: `userController.postUserInfo ERROR: fourteener peak name missing`,
      message: {
        err: 'userController.postUserInfo: ERROR: fourteener peak name missing',
      },
    });
  try {
    const userInfo = await Users.create({
      peak,
      completionDate,
      completionTime,
    });
    res.locals.userInfo = userInfo;
    return next();
  } catch {
    return next({
      log: `userController.postUserInfo ERROR: trouble posting user data to database`,
      message: {
        err: 'userController.postUserInfo: ERROR: trouble posting user data to database',
      },
    });
  }
};

userController.patchUserNotes = async (req, res, next) => {
  //getting all basic user info
  const peak = req.query.name;
  const { notes } = req.body;
  if (!peak || !notes)
    return next({
      log: `userController.patchUserNotes ERROR: fourteener peak or notes missing`,
      message: {
        err: 'userController.patchUserNotes: ERROR: fourteener peak or notes missing',
      },
    });
  try {
    const userNotes = await Users.findOneAndUpdate(
      { peak },
      { notes },
      { new: true }
    );
    res.locals.userNotes = userNotes;
    return next();
  } catch {
    return next({
      log: `userController.patchUserNotes ERROR: trouble updating user data from database`,
      message: {
        err: 'userController.patchUserNotes: ERROR: trouble updating user data from database',
      },
    });
  }
};

module.exports = userController;
