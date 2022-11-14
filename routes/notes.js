const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtil');
const uuid = require('../helpers/uuid');

//GET route for retrieving notes
notes.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
  
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
  });

//POST a new note
notes.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const { noteTitle, noteText } = req.body;
  
    if (req.body) {
      const newNote = {
        noteTitle,
        noteText,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, '../db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });
  