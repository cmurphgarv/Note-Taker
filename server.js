//Import packages and route files
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);

//GET index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/pages/index.html'))
  });

//GET notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
  });



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);