# 🌾 AgriAssist AI

## Project Overview

AgriAssist AI is a smart agriculture web application designed to help farmers access useful agricultural information in one place.

The application provides crop management, weather updates, government schemes, market information, secure authentication, and AI-powered crop disease detection.

The AI feature allows users to enter a crop name and symptoms and optionally upload a plant image. The application sends the information to the backend, where Google Gemini AI analyzes the input and provides possible disease, cause, treatment, and prevention suggestions.

---

## Features

- User Registration
- User Login
- Google OAuth Login
- JWT-based Authentication
- Crop Management
- Add, Edit and Delete Crops
- Weather Updates
- Government Schemes
- Market Prices
- AI Crop Disease Detection
- Plant Image Upload
- AI-generated Disease Analysis
- Responsive Web Interface

---

## 🤖 AI Crop Disease Detection

The AI disease detection feature uses the Google Gemini API.

Users can provide:

- Crop name
- Crop symptoms
- Optional plant image

The backend processes the request and sends the information to Gemini AI.

The AI provides:

1. Possible Disease
2. Cause
3. Treatment
4. Prevention

The Gemini API key is stored securely in the backend `.env` file and is not exposed in the frontend.

---

## 🛠️ Tech Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL
- Prisma ORM

### Authentication

- JWT
- Google OAuth
- Passport.js
- Express Session

### AI

- Google Gemini API
- `@google/genai`

### Image Upload

- Multer

### Deployment

- Vercel – Frontend
- Render – Backend

---

## 📁 Project Structure

```text
AgriAssist-AI/
│
├── backend/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── homepage.html
├── login.html
├── crop.html
├── weather.html
├── scheme.html
├── market.html
├── style.css
├── README.md
│
└── screenshorts/
    ├── dashboard.png
    ├── crop managment.png
    ├── crop added.png
    └── AI crop disease detection.png