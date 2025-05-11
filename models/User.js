const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    aadhaarNumber: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    panNumber: { type: String, required: true },
    uniqueid: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('User', userSchema);