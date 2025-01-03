const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API route to handle login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple login logic (replace this with your authentication logic)
    if (username === 'admin' && password === 'password') {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

// Fallback for undefined routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
