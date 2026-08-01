require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/passport");

const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");
const authLimiter = require("./middleware/rateLimiter");
const aiRoutes = require("./routes/aiRoutes");
const app = express();
const cropRoutes = require("./routes/cropRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const schemeRoutes = require("./routes/schemeRoutes");
const marketRoutes = require("./routes/marketRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/ai", aiRoutes);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Auth Routes with Rate Limiting
app.use("/api/auth", authLimiter, authRoutes);
app.use("/auth", authRoutes);

// Test Route
app.get("/hello", (req, res) => {
  res.send("Hello Route Working");
});


// Protected Route
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Protected Route Working",
    user: req.user,
  });
});

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Agri-Allied Backend Running");
});

// Crop Routes
app.use("/api/crops", cropRoutes);

// Weather Routes
app.use("/api/weather", weatherRoutes);

// Scheme Routes
app.use("/api/schemes", schemeRoutes);
app.use("/api/market", marketRoutes);

// Server
const PORT = process.env.PORT || 5000;

console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("Gemini Key Loaded:", process.env.GEMINI_API_KEY?.substring(0, 5));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});