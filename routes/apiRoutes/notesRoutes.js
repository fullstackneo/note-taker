const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notes = require('../../db/db.json');

// get all the notes 
router.get('/notes', (req, res) => {
  res.send(notes);
});

// add notes 
router.post('/notes', (req, res) => {
  let id = parseInt(new Date().getTime() / 1000).toString(16);
  notes.push({
    id: id,
    title: req.body.title,
    text: req.body.text,
  });
  fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes), err => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        message: 'add successfully',
        note: {
          id: id,
          title: req.body.title,
          text: req.body.text,
        },
      });
    }
  });
});


// delete note
router.delete('/notes/:id', (req, res) => {
  notes.some((el, index) => {
    console.log(el);

    if (el.id === req.params.id) {
      notes.splice(index, 1);
      fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes), err => {
        if (err) {
          console.log(err);
        } else {
          res.json({
            message: 'deleted',
            note: el,
          });
        }
      });
      return true;
    }
  });
});

module.exports = router;
