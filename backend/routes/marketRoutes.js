const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            crop: "Wheat",
            price: "₹2500 / Quintal"
        },
        {
            crop: "Rice",
            price: "₹2200 / Quintal"
        },
        {
            crop: "Maize",
            price: "₹1800 / Quintal"
        }
    ]);
});

module.exports = router;