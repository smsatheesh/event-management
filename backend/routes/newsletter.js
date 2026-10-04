const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const NEWSLETTER_FILE = path.join(__dirname, "..", "newsletter.json");

// Helper to read the newsletter file
function readNewsletter() {
  const data = fs.readFileSync(NEWSLETTER_FILE, "utf8");
  return JSON.parse(data);
}

// Helper to write to the newsletter file
function writeNewsletter(data) {
  fs.writeFileSync(NEWSLETTER_FILE, JSON.stringify(data, null, 2));
}

// GET all emails (for admin viewing)
router.get("/", (req, res) => {
  try {
    const emails = readNewsletter();
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: "Failed to read newsletter data" });
  }
});

// POST a new email
router.post("/", (req, res) => {
  const { email } = req.body;

  // Basic validation
  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  try {
    const emails = readNewsletter();

    // Check if email already exists
    if (emails.includes(email)) {
      return res.status(409).json({ error: "Email already subscribed" });
    }

    // Add new email
    emails.push(email);
    writeNewsletter(emails);

    res.status(201).json({ message: "Email subscribed successfully", email });
  } catch (error) {
    res.status(500).json({ error: "Failed to subscribe email" });
  }
});

module.exports = router;
