import express from 'express'
import fs from 'fs'
import path from 'path'
const router = express.Router()

import calcAvg from '../calcAvg/calcAvg'
import getGeneralRatings from '../getArrays/getGeneralRatings'
import writeResultToFile from '../writeResultToFile/writeResultsToFile'

const allReviewsArray = []
const genRatingsArr = []


// Arrow functions
router.get('/', (req, res) => {
	res.sendFile('reviews.json', { root: 'src/data' })
})

router.get('/calc', (req, res) => {
	// const generalAverage = 0
	const filePath = path.join(__dirname, '../../data/reviews.json')
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) throw err
		// populate empty array with json data
		allReviewsArray.push(JSON.parse(data))
		// populate the general ratings array
		getGeneralRatings(allReviewsArray, genRatingsArr)
		// console.log(genRatingsArr);
		console.log(calcAvg(genRatingsArr)) // log avg of the genRatingsArr
		// calc the average and bind it to a constant
		const generalRatingsCalculatedAverage = calcAvg(genRatingsArr)
		// set the path to where the file will be written
		const calcAvgFilePath = path.join(
			__dirname,
			'../../data/generalRatingsCalculatedAverage.json'
		)
		// write the result to file
		writeResultToFile(calcAvgFilePath, JSON.stringify(generalRatingsCalculatedAverage))

	})
	// send file to endpoint
	res.sendFile('generalRatingsCalculatedAverage.json', { root: 'src/data' })
})
// Exporting an object as the default import for this module
export default router
