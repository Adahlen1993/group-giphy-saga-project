const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `
  SELECT "favorites"."categories_id", "favorites"."url", "favorites"."isFavorited"
  FROM "favorites" JOIN "categories"
  ON "categories"."id" = "favorites"."categories_id"
  WHERE "favorites"."isFavorited" = true;
  `;
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('Error in GET /api/favorites', err);
    res.sendStatus(500);
  });
});

// add a new favorite
router.post('/', (req, res) => {
  const newFavorite = req.body;
  const queryText = `
  INSERT INTO "favorites" 
  ("url", "categories_id")
  VALUES
  ($1, $2) RETURNING *;
  `;
  const queryValues = [
    newFavorite.url,
    newFavorite.categories_id
  ];
  pool.query(queryText, queryValues)
  .then((result) => { res.sendStatus(201); })
  .catch((err) => {
    console.log('Error in POST /api/favorites', err);
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
    updatedFavorite.categories_id
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
