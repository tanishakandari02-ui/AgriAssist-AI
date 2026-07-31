const express = require("express");
const router = express.Router();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/disease", async (req, res) => {
  try {
    const { crop, symptoms } = req.body;

    if (!crop || !symptoms) {
      return res.status(400).json({
        error: "Crop and symptoms are required.",
      });
    }

    const prompt = `
You are an agriculture expert.

Crop: ${crop}

Symptoms:
${symptoms}

Provide:
1. Possible disease
2. Cause
3. Treatment
4. Prevention
`;

    console.log("Using model:", "gemini-flash-latest");

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    console.log("Gemini Response:", response);

    res.json({
      result: response.text,
    });

  } catch (error) {
    console.error("FULL ERROR:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;