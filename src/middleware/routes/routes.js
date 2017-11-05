import express from 'express'
import fs from 'fs'
import path from 'path'
const router = express.Router()

import calcAvg from '../calcAvg/calcAvg'
import getGeneralRatings from '../getArrays/getGeneralRatings'
import writeResultToFile from '../writeResultToFile/writeResultsToFile'

const reviewsArray = []
const generalRatingsArray = []
const resultObj = {generalRatingResult: null}

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
		reviewsArray.push(JSON.parse(data))
		// populate the general ratings array
		getGeneralRatings(reviewsArray, generalRatingsArray)
		// console.log(generalRatingsArray);
		console.log(calcAvg(generalRatingsArray)) // log avg of the generalRatingsArray
		// calc the average and bind it to a constant
		resultObj.generalRatingResult = calcAvg(generalRatingsArray)
		// set the path to where the file will be written
		const calcAvgFilePath = path.join(
			__dirname,
			'../../data/generalRatingsCalculatedAverage.json'
		)
		// write the result to file
		writeResultToFile(calcAvgFilePath, JSON.stringify(resultObj))

	})
	// send file to endpoint
	res.sendFile('generalRatingsCalculatedAverage.json', { root: 'src/data' })
})
// Exporting an object as the default import for this module
export default router
