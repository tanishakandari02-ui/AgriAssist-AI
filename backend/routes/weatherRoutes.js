const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        temperature: "28°C",
        humidity: "65%",
        condition: "Partly Cloudy",
        advisory: "Light irrigation recommended for wheat crops."
    });
});

module.exports = router;