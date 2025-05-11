const User = require('../models/User');

exports.saveUserData = async (req, res) => {
    try {
        const { name, aadhaarNumber, dateOfBirth,panNumber, uniqueid } = req.body;

        // Create a new user document
        const newUser = new User({
            name,
            aadhaarNumber,
            dateOfBirth,
            panNumber,
            uniqueid
        });

        // Save the new user to the database
        await newUser.save();

        // Send a success response
        res.status(200).json({
            success: true,
            message: "User Data Submitted Successfully!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while submitting user data"
        });
    }
};
