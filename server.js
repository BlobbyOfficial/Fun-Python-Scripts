
// --- Fun Node.js-only Endpoints ---
const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why do Java developers wear glasses? Because they don't see sharp.",
    "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    "There are only 10 types of people in the world: those who understand binary and those who don't.",
    "To understand what recursion is, you must first understand recursion."
];
// Global error logging for uncaught exceptions and unhandled promise rejections
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
// Improved: cleaner structure, static file serving, error handling, and ready for extension

const express = require('express');
const path = require('path');
const { getScriptInfo } = require('./script-loader');

const app = express();

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Serve the scripts folder for downloads and source viewing (now outside public)
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

// API endpoint for scripts info
app.get('/api/scripts', (req, res) => {
    try {
        const scriptsDirectory = path.join(__dirname, 'scripts');
        const scripts = getScriptInfo(scriptsDirectory);
        res.json(scripts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load scripts.' });
    }
});

// Fallback for SPA routing or 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server if this file is run directly
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;