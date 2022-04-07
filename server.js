const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

app.use('/note-taker', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at 127.0.0.1:${PORT}`);
});
