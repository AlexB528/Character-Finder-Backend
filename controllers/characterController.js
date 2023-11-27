const Character = require("../models/character");
const characterCoordinates = require("../temp/characterCoordinates")
const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.send_Characters = asyncHandler(async (req, res, next) => {
    const characters = await Character.find({});
    res.json(characters);
});