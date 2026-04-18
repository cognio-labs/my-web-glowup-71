const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

// Premium Middleware
app.use(cors());
app.use(express.json());

// Transporter configuration for Gmail
// Note: Use environment variables for security. 
// For Gmail, you'll need an 'App Password' if 2FA is enabled.
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER || 'aryanthealgohype@gmail.com',
        pass: process.env.GMAIL_PASS // Use an App Password here
    }
});

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

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    
    console.log(`\x1b[33m[New Message]\x1b[0m From: ${firstName} ${lastName} (${email})`);
    
    // Email content
    const mailOptions = {
        from: process.env.GMAIL_USER || 'aryanthealgohype@gmail.com',
        to: 'aryanthealgohype@gmail.com', // Recipient address
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: `
            New message from your website contact form:
            
            Name: ${firstName} ${lastName}
            Email: ${email}
            Phone: ${phone}
            
            Message:
            ${message}
        `,
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    try {
        if (!process.env.GMAIL_PASS) {
            console.warn("\x1b[31m[Warning]\x1b[0m GMAIL_PASS not set. Email not sent.");
            // We still return 200 for now so frontend doesn't show error, 
            // but in production you'd want to handle this.
            return res.status(200).json({
                success: true,
                message: "Message logged (Gmail credentials missing)."
            });
        }

        await transporter.sendMail(mailOptions);
        console.log("\x1b[32m[Success]\x1b[0m Email sent to Gmail.");
        
        res.status(200).json({
            success: true,
            message: "Message received successfully! We will contact you soon."
        });
    } catch (error) {
        console.error("\x1b[31m[Error]\x1b[0m Failed to send email:", error);
        res.status(500).json({
            success: false,
            message: "Failed to send email notification."
        });
    }
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

// Export for Vercel
module.exports = app;

// Local development listener
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`\x1b[35m[Sexy Backend]\x1b[0m Server is running on http://localhost:${PORT}`);
        console.log(`\x1b[33m[Anandda]\x1b[0m Ready to serve the confluence of wisdom.`);
    });
}
