const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

// Serve the React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the sitemap.xml file
app.get('public/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', './sitemap.xml'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
