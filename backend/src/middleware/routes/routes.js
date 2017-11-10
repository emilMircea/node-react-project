const express = require('express');
const cors = require('cors')
const fs = require('fs');
const path = require('path');

const router = express.Router()
router.use(cors())

const fetchData = require('../fetchData/fetchData');
// Arrow functions
router.get('/', (req, res) => {
	res.sendFile('reviews.json', { root: 'src/data' })
})


router.get('/averages', fetchData)

module.exports = router
