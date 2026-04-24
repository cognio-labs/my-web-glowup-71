const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Premium Middleware
app.use(cors());
app.use(express.json());

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const NOTIFY_TO = process.env.NOTIFY_TO || "ananddaofficial@gmail.com";

function assertEnv(res) {
  if (!GMAIL_USER || !GMAIL_PASS || !NOTIFY_TO) {
    res.status(500).json({
      success: false,
      message:
        "Email is not configured. Set GMAIL_USER, GMAIL_PASS (Gmail App Password), and NOTIFY_TO in environment variables.",
    });
    return false;
  }
  return true;
}

// Transporter configuration for Gmail
// For Gmail, you'll need an 'App Password' if 2FA is enabled.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

// Status Route
app.get("/api/status", (req, res) => {
  res.json({
    brand: "Anandda Premium",
    status: "Online",
    message: "Welcome to the Confluence of Pathways to Bliss Backend",
    version: "1.0.0",
    path: "/api/status",
  });
});

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body || {};

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields.",
    });
  }

  if (!assertEnv(res)) return;

  console.log(`\x1b[33m[New Message]\x1b[0m From: ${firstName} ${lastName} (${email})`);

  const mailOptions = {
    from: GMAIL_USER,
    to: NOTIFY_TO,
    subject: `New Contact Form Submission - ${firstName} ${lastName}`,
    text: [
      "New message from your website contact form:",
      "",
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, "<br/>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("\x1b[32m[Success]\x1b[0m Email sent.");
    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("\x1b[31m[Error]\x1b[0m Failed to send email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email notification.",
    });
  }
});

// Example Data for Archives
app.get("/api/archives", (req, res) => {
  res.json([
    { id: 1, title: "April 2026", type: "Issue" },
    { id: 2, title: "March 2026", type: "Issue" },
    { id: 3, title: "February 2026", type: "Issue" },
    { id: 4, title: "January 2026", type: "Issue" },
    { id: 5, title: "December 2025", type: "Issue" },
    { id: 6, title: "November 2025", type: "Issue" },
  ]);
});

// Export for Vercel
module.exports = app;

// Local development listener
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`\x1b[35m[Backend]\x1b[0m Server is running on http://localhost:${PORT}`);
  });
}
