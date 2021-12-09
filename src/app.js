const cors = require('cors');
const express = require('express');
const sequelize = require('./db/sequelize-instace');
require('./db/associations');
require('express-async-errors');

const {
  albumsRouter,
  artistsRouter,
  tracksRouter,
  pingRouter
} = require('./routes');

const app = express();

// connecting to DB
console.log('connecting to db');
sequelize.authenticate()
  .then(() => {
    console.log('connected to DB');
  })
  .catch(err => {
    console.error('failed to connect to DB:', err.message);
    process.exit(1);
  });

sequelize.sync({ force: false });

// set middlewares
app.use(cors());
app.use(express.json());

// set routes
app.use('/ping', pingRouter);
app.use('/api/albums', albumsRouter);
app.use('/api/artists', artistsRouter);
app.use('/api/tracks', tracksRouter);

// set catch unknown endpoints
app.use((req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
});

module.exports = app;
