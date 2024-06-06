const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {

  const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
  axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`)
  .then((response) => {
    res.send(response.data.data);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  const newFavorite = req.body;
  const queryText = `
  INSERT INTO "favorites" 
  ("url")
  VALUES
  ($1) RETURNING *;
  `;
  const queryValues = [
    newFavorite.url
  ];
  pool.query(queryText, queryValues)
  .then((result) => { res.sendStatus(201); })
  .catch((err) => {
    console.log('Error in POST /api/favorites', err);
    res.sendStatus(500);
  });
});

// update a favorite's associated category
//router.put('/:id', (req, res) => {
//   // req.body should contain a category_id to add to this favorite image
//   const updatedFavorite = req.body;

//   const queryText = `
//   UPDATE "favorites"
//   SET
//     "isFavorited"=$2
//   WHERE
//     "url"=$1
//   `
//   const queryValues = [
//     updatedFavorite.url,
//     updatedFavorite.isFavorited
//   ]
//   pool.query(queryText, queryValues)
//   .then((result) => { res.sendStatus(200); })
//   .catch((err) => {
//     console.log('Error in PUT /api/favorites/:id', err);
//     res.sendStatus(500);
//   });
// });

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
