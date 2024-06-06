const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

router.get('/:string', (req, res) => {
    // send all gifs back to the client
    const GIPHY_API_KEY = process.env.GIPHY_API_KEY; // from .env file
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${req.params.string}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`).then(response => {
        console.log(response.data.data);
       res.send(response.data.data);
    })
 })
 

module.exports = router;