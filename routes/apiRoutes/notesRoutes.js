const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notes = require('../../db/db.json');

router.post('/notes', (req, res) => {
  // save body to database
  notes.push({
    title: req.body.title,
    text: req.body.text,
  });

  fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes), err => console.log(err));
  // return the 200 success and body content
});

module.exports = router;
