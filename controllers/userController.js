const User = require("../models/user");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.add_user = [
  // Validate and sanitize fields.
  body("name")
    .isLength({ min: 1 })
    .escape()
    .withMessage("Name must be specified.")
    .isAlphanumeric('en-US', { ignore: ' ' })
    .withMessage("First name has non-alphanumeric characters."),
  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create Author object with escaped and trimmed data
    const user = new User({
      name: req.body.name,
      time: req.body.time,
    });

    if (!errors.isEmpty()) {
      // There are errors.
      res.json({ message: "Unsuccessful sign up", errorDetails: errors.array()});
    } else {
      // Data from form is valid.
      // Save author.
      const result = await user.save();
      // Redirect to new author record.
      res.json({ message: "User successfully saved", result: result});
    }
  }),
];

// Display list of all Authors.
exports.send_users = asyncHandler(async (req, res, next) => {
    const users = await User.find({});
    res.json(users);
});