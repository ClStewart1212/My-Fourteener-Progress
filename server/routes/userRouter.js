const express = require('express')

//add in any controllers
const userController = require('../controllers/userController')

const router = express.Router()

//add routers as needed
router.get('/:username', userController.getUserInfov2, (req, res) => {
  return res.status(200).json(res.locals.userInfo)
})

router.get('/', userController.getUserInfo, (req, res) => {
  return res.status(200).json(res.locals.userInfo)
})

router.post('/', userController.postUserInfo, (req, res) => {
  return res.status(200).json(res.locals.userInfo)
})

//! for when there are actually different users
// router.post('/', userController.createUser, (req, res) => {
//   return res.status(200).json(res.locals.userInfo)
// })

// router.patch('/:username/complete', userController.addPeakv2, (req, res) => {
//   return res.status(200).json(res.locals.userInfo)
// })

router.patch('/notes', userController.patchUserNotes, (req, res) => {
  return res.status(200).json(res.locals.userNotes)
})

module.exports = router
