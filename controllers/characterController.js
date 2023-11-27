const Character = require("../models/character");
const characterCoordinates = require("../temp/characterCoordinates")
const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.send_Characters = asyncHandler(async (req, res, next) => {
    const characters = await Character.find({});
    res.json(characters);
});

exports.add_Characters = asyncHandler(async (req, res, next) => {

        // Create a Book object with escaped and trimmed data.
        const character = new Character({
          name: req.body.name,
          coordinatesList: req.body.characterCoordinates,
          difficulty: req.body.difficulty,
        });

        await character.save();
        return res.json({message: 'successful save'});
});