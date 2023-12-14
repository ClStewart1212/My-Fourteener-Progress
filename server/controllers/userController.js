const { Users } = require('../models/mountainModels')

const userController = {}

//middleware to get basic user info
userController.getUserInfo = async (req, res, next) => {
  //getting all basic user info for each mountain
  try {
    const userInfo = await Users.find()
    res.locals.userInfo = userInfo
    return next()
  } catch {
    return next({
      log: `userController.getUserInfo ERROR: trouble getting user data from database`,
      message: {
        err: 'userController.getUserInfo: ERROR: trouble getting user data from database',
      },
    })
  }
}

userController.getUserInfov2 = async (req, res, next) => {
  //getting all basic user info for each mountain
  try {
    const username = req.params.username
    const userInfo = await Users.find({ username })
    res.locals.userInfo = userInfo
    return next()
  } catch {
    return next({
      log: `userController.getUserInfo ERROR: trouble getting user data from database`,
      message: {
        err: 'userController.getUserInfo: ERROR: trouble getting user data from database',
      },
    })
  }
}

userController.postUserInfo = async (req, res, next) => {
  //getting all basic user info
  const peak = req.query.name
  console.log('peak: ', peak)
  const { completionDate, completionTime } = req.body
  console.log(
    'completionDate, completionTime: ',
    completionDate,
    completionTime,
  )
  if (!peak)
    return next({
      log: `userController.postUserInfo ERROR: fourteener peak name missing`,
      message: {
        err: 'userController.postUserInfo: ERROR: fourteener peak name missing',
      },
    })
  try {
    const userInfo = await Users.create({
      peak,
      completionDate,
      completionTime,
    })
    res.locals.userInfo = userInfo
    return next()
  } catch {
    return next({
      log: `userController.postUserInfo ERROR: trouble posting user data to database`,
      message: {
        err: 'userController.postUserInfo: ERROR: trouble posting user data to database',
      },
    })
  }
}

userController.createUser = async (req, res, next) => {
  //getting all basic user info
  const { username, password, email } = req.body
  if (!username || !password || !email)
    return next({
      log: `userController.postUserInfo ERROR: fourteener peak name missing`,
      message: {
        err: 'userController.postUserInfo: ERROR: fourteener peak name missing',
      },
    })
  try {
    const userInfo = await Users.create({
      username,
      password,
      email,
    })
    res.locals.userInfo = userInfo
    return next()
  } catch {
    return next({
      log: `userController.postUserInfo ERROR: trouble posting user data to database`,
      message: {
        err: 'userController.postUserInfo: ERROR: trouble posting user data to database',
      },
    })
  }
}

userController.addPeak = async (req, res, next) => {
  //getting all basic user info
  const { username } = req.params
  const { mountainId, peak, completionTime, completionDate } = req.body
  if (!mountainId || !peak || !completionTime || !completionDate)
    return next({
      log: `userController.patchUserNotes ERROR: fourteener peak or notes missing`,
      message: {
        err: 'userController.patchUserNotes: ERROR: fourteener peak or notes missing',
      },
    })
  const newPeak = { mountainId, peak, completionTime, completionDate }
  try {
    const userInfo = await Users.findOneAndUpdate(
      { username },
      { $push: { peaks: newPeak } },
      { new: true },
    )
    res.locals.userInfo = userInfo
    return next()
  } catch {
    return next({
      log: `userController.patchUserNotes ERROR: trouble updating user data from database`,
      message: {
        err: 'userController.patchUserNotes: ERROR: trouble updating user data from database',
      },
    })
  }
}

userController.patchUserNotes = async (req, res, next) => {
  //getting all basic user info
  const peak = req.query.name
  const { notes } = req.body
  if (!peak || !notes)
    return next({
      log: `userController.patchUserNotes ERROR: fourteener peak or notes missing`,
      message: {
        err: 'userController.patchUserNotes: ERROR: fourteener peak or notes missing',
      },
    })
  try {
    const userNotes = await Users.findOneAndUpdate(
      { peak },
      { notes },
      { new: true },
    )
    res.locals.userNotes = userNotes
    return next()
  } catch {
    return next({
      log: `userController.patchUserNotes ERROR: trouble updating user data from database`,
      message: {
        err: 'userController.patchUserNotes: ERROR: trouble updating user data from database',
      },
    })
  }
}

//TODO: Add patch request to add photo url and photo to database

module.exports = userController
