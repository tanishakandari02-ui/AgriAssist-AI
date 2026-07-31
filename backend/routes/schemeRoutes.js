const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            title: "PM-KISAN",
            description: "Eligible farmers ko ₹6000 per year financial assistance."
        },
        {
            title: "Pradhan Mantri Fasal Bima Yojana",
            description: "Natural disaster se crop loss hone par insurance cover."
        },
        {
            title: "Soil Health Card Scheme",
            description: "Farmers ko soil testing aur fertilizer recommendations."
        }
    ]);
});

module.exports = router;