const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get('/', authController.isLoggedIn, viewsController.getOverview);

router.get('/tour/:slug',authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', authController.isLoggedIn, viewsController.getSignupForm);
router.get('/me', authController.protect, viewsController.getAccount);

router.get(
  '/my-tours',
  bookingController.createBookingCheckout,
  authController.protect,
  viewsController.getMyTours
);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

router.get('/my-reviews', authController.protect, viewsController.getMyReviews);

router.get(
  '/manage-tours',
  authController.isLoggedIn,
  viewsController.getManageTour
);

router.get(
  '/create-new-tour',
  authController.isLoggedIn,
  viewsController.getCreateTourForm
);

router.get(
  '/update-tour',
  authController.isLoggedIn,
  viewsController.getUpdateTourForm
);

router.get(
  '/delete-tour',
  authController.isLoggedIn,
  viewsController.getDeleteTourForm
);

router.get(
  '/manage-users',
  authController.isLoggedIn,
  viewsController.getManageUsers
);

router.get(
  '/manage-reviews',
  authController.isLoggedIn,
  viewsController.getManageReviews
);

module.exports = router;

