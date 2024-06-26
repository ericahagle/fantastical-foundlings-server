const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const staffBioRouter = require('./routes/staff-bio-router');

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Test');
});

app.use('/api', staffBioRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

module.exports = app;
