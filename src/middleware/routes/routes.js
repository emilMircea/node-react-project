import express from 'express'
import fs from 'fs'
import path from 'path'
const router = express.Router()

import fetchData from '../fetchData/fetchData'

// Arrow functions
router.get('/', (req, res) => {
	res.sendFile('reviews.json', { root: 'src/data' })
})

router.get('/averages', (req, res) => {
	fetchData(req, res)
})

export default router
