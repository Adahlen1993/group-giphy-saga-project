const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
    // send all gifs back to the client
    const GIPHY_API_KEY = process.env.GIPHY_API_KEY; // from .env file
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${payload.data}`).then(response => {
       // console.log(response.data.data);
       res.send(response.data.data);
    })
 })
 

module.exports = router;