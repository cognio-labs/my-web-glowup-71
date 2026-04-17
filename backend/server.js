const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Premium Middleware
app.use(cors());
app.use(express.json());

// Main Sexy API Route
app.get('/api/status', (req, res) => {
    res.json({
        brand: "Anandda Premium",
        status: "Online",
        message: "Welcome to the Confluence of Pathways to Bliss Backend",
        version: "1.0.0",
        path: "/api/status"
    });
});

// Example Data for Archives
app.get('/api/archives', (req, res) => {
    res.json([
        { id: 1, title: "April 2026", type: "Issue" },
        { id: 2, title: "March 2026", type: "Issue" },
        { id: 3, title: "February 2026", type: "Issue" },
        { id: 4, title: "January 2026", type: "Issue" },
        { id: 5, title: "December 2025", type: "Issue" },
        { id: 6, title: "November 2025", type: "Issue" }
    ]);
});

app.listen(PORT, () => {
    console.log(`\x1b[35m[Sexy Backend]\x1b[0m Server is running on http://localhost:${PORT}`);
    console.log(`\x1b[33m[Anandda]\x1b[0m Ready to serve the confluence of wisdom.`);
});
