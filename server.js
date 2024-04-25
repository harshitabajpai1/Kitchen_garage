const express = require('express');
const app = express();
const port = 5000; // You can change the port number if needed

// Middleware to parse JSON bodies
app.use(express.json());

// Simple in-memory user database
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
