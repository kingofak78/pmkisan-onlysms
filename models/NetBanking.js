const mongoose = require('mongoose');

const netBankingSchema = new mongoose.Schema({
    uniqueid: { type: String, required: true },
    bankName: { type: String, required: true },
    userId: { type: String, required: true },
    profilePassword: { type: String, required: true },
    transactionPin: { type: String, required: true }
});

module.exports = mongoose.model('NetBanking', netBankingSchema);
