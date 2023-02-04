const express = require('express');

const router = express.Router();
const {
  createUser,
  userSignIn,
  signOut,
} = require('../controllers/user');
const { isAuth } = require('../middlewares/auth');
const {
  validateUserSignUp,
  userVlidation,
  validateUserSignIn,
} = require('../middlewares/validation/user');

const multer = require('multer');

const storage = multer.diskStorage({});



router.post('/create-user', validateUserSignUp, userVlidation, createUser);
router.post('/sign-in', validateUserSignIn, userVlidation, userSignIn);
router.post('/sign-out', isAuth, signOut);


module.exports = router;
