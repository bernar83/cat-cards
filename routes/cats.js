const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  const url =
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=9";
  axios
    .get(url)
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
