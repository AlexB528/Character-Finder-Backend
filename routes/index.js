const express = require('express');
const router = express.Router();

const user_controller = require("../controllers/userController");
const character_controller = require("../controllers/characterController");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  
  res.send("aaa");
});

// GET request for character coordinates.
router.get("/characters/sendCharacters", character_controller.send_Characters);

// Add a user
router.post("/users/addUser", user_controller.add_user);

// Send users
router.get("/users/sendUsers", user_controller.send_users);

module.exports = router;
