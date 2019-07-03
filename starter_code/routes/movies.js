const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", (req, res) => {
  Movie.find()
    .then(moviesList => {
      res.render("movies", { moviesList });
    })
    .catch(err => {
      console.log("Error loading movies from database: ", err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .then(data => {
      res.render("view", data);
    })
    .catch(err => {
      console.log("Error loading movies from database: ", err);
    });
});

module.exports = router;
