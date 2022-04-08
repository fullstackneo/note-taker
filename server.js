const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// deploy all the front-end files in public
app.use(express.static('./public'));

// use route middlewares to deal with url request 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// catch all other url request 
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running at 127.0.0.1:${PORT}`);
});
