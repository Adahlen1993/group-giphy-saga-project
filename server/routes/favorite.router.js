const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `
  SELECT "favorites"."categories_id", "favorites"."url", "favorites"."isFavorited"
  FROM "favorites" JOIN "categories"
  ON "categories"."id" = "favorites"."categories_id";
  `;
  axios.get()
  .then((response) => {
    res.send(response.data.data);
  })
});

// add a new favorite
router.post("/", (req, res) => {
  console.log("POST /api/favorites");
  console.log('req.body.images.original.url: ', req.body.images.original.url)
  pool
    .query(`INSERT INTO "favorite" ("name", "url") VALUES ('${req.body.title}', '${req.body.images.original.url}');`)
    .then((result) => {
      console.log("in /api/favorite POST");
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error POST /api/favorite", error);
      res.sendStatus(500);
    });
});
// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const updatedFavorite = req.body;

  const queryText = `
  UPDATE "favorites"
  SET
    "categories_id"=$2
  JOIN 
    "categories" ON "categories"."id" = "favorites"."categories_id";
  WHERE
    "favorites"."url"=$1
  `
  const queryValues = [
    updatedFavorite.url,
    updatedFavorite.isFavorited
  ]
  pool.query(queryText, queryValues)
  .then((result) => { res.sendStatus(200); })
  .catch((err) => {
    console.log('Error in PUT /api/favorites/:id', err);
    res.sendStatus(500);
  });
});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
