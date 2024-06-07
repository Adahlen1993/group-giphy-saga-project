const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const queryText = `

 SELECT * FROM "favorites";

  `;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error in GET /api/favorites", err);
      res.sendStatus(500);
    });
});
router.get("/category", (req, res) => {
  const queryText = `

  SELECT * FROM "favorites" ORDER BY id DESC LIMIT 1;

  `;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error in GET /api/favorites", err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  const newFavorite = req.body;
  const queryText = `
  INSERT INTO "favorites" 


  ("title", "url" )

  VALUES
  ($1, $2) RETURNING *;
  `;
  const queryValues = [newFavorite.title, newFavorite.url];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in POST /api/favorites", err);
      res.sendStatus(500);
    });
});

// update a favorite's associated category
router.put("/", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const updatedFavorite = req.body;

  const queryText = `
  UPDATE "favorites"

  SET "categories_id" = $2
  WHERE "favorites"."id" = $1;
  `
  const queryValues = [
    updatedFavorite.id,
    updatedFavorite.categories_id
  ]
  pool.query(queryText, queryValues)
  .then((result) => { res.sendStatus(200); })
  .catch((err) => {
    console.log('Error in PUT /api/favorites/:id', err);
    res.sendStatus(500);
  });

});

router.get('/:url', (req, res) => {
  const queryText = `
    SELECT * FROM "favorites"
      WHERE url=$1;
  `;
  pool.query(queryText, [req.params.url])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error in GET /api/favorites/:url', err);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete("/:id", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
