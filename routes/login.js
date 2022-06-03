const express = require('express');
const {registerView, loginView, registerUser, loginUser } = require('../controllers/loginController');
const router = express.Router();
const { dashboardView } = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");

router.get('/login', loginView);
router.get('/logout', loginView);
router.get('/register', registerView);

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/dashboard',protectRoute, dashboardView);




module.exports = router;