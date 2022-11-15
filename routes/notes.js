const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtil');
const path = require('path');
const uuid = require('../helpers/uuid');

//GET route for retrieving notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
  
    readFromFile(path.join(__dirname, '../db/db.json')).then((data) => res.json(JSON.parse(data)));
  });

//POST a new note
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, path.join(__dirname, '../db/db.json'));
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

  module.exports = notes;
  