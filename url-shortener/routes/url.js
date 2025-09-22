
const express = require("express");
const { handleGenerateNewShortURL, handleGetAnalytics } = require("../controllers/url");

const router = express.Router();

// create short url
router.post("/shorten", handleGenerateNewShortURL);

// analytics
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
