const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`).then(response => {
        console.log(response.data.data);
        res.send(response.data.data);
    })
})

module.exports = router;