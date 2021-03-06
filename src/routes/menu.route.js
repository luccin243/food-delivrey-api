const express = require('express');
const router = express.Router();
const { getUserByID } = require('../_middlewares/user.middleware');
const {
  getMenuByID,
  getCategoryByID,
  checkCategoryName,
  checkName,
} = require('../_middlewares/menu.middleware');
const { multer } = require('../_middlewares/multer.middleware');
const { requireSignin, isAuth } = require('../_middlewares/auth.middleware');
const {
  constrollorCreateService,
  readAllMenu,
  disableUnableControllor,
  updateMenu,
} = require('../controllers/menu.contoller');
const {
  menuValidator,
  menuEditValidator,
} = require('../validation/menu.validation');

router.post(
  '/create/menu/:userId',
  multer,
  checkName,
  menuValidator,
  constrollorCreateService
);

router.get('/read/all/menu/:userId', requireSignin, isAuth, readAllMenu);
router.put(
  '/update/menu/:userId',
  requireSignin,
  isAuth,
  multer,
  checkName,
  menuEditValidator,
  updateMenu
);
router.get(
  '/disableUnable/menu/:userId',
  requireSignin,
  isAuth,
  disableUnableControllor
);

router.param('userId', getUserByID);

module.exports = router;
