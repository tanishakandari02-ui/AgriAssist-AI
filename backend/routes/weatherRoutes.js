const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
try {

    const apiKey = process.env.OPENWEATHER_API_KEY;

    console.log("Weather API Key Loaded:", !!apiKey);

    if (!apiKey) {
        return res.status(500).json({
            error: "OPENWEATHER_API_KEY is missing from .env"
        });
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=Dehradun,IN&appid=${apiKey}&units=metric`;

    console.log("Calling OpenWeather API...");

    const response = await fetch(url);

    const data = await response.json();

    console.log("OpenWeather Response:", data);

    if (!response.ok) {
        return res.status(response.status).json({
            error: "OpenWeather API Error",
            message: data.message || "Unknown error",
            code: data.cod
        });
    }

    const temperature = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const condition = data.weather[0].description;

    let advisory;

    if (temperature >= 35) {

        advisory =
            "High temperature detected. Irrigate crops in the morning or evening and avoid unnecessary water loss.";

    } else if (humidity >= 80) {

        advisory =
            "High humidity detected. Monitor crops for fungal diseases and maintain proper field ventilation.";

    } else if (condition.toLowerCase().includes("rain")) {

        advisory =
            "Rain is expected. Avoid unnecessary irrigation and ensure proper drainage to prevent waterlogging.";

    } else {

        advisory =
            "Weather conditions are suitable for regular farming activities. Monitor soil moisture before irrigation.";

    }

    res.json({
        location: "Dehradun, Uttarakhand",
        temperature: `${temperature}°C`,
        humidity: `${humidity}%`,
        condition:
            condition.charAt(0).toUpperCase() + condition.slice(1),
        advisory: advisory,
        updated: new Date().toLocaleString("en-IN")
    });

} catch (error) {

    console.error("Weather Server Error:", error);

    res.status(500).json({
        error: "Weather server error",
        message: error.message
    });
}


});

module.exports = router;
