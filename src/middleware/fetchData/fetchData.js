import reviews from '../../data/reviews.json'
import fs from 'fs'
import path from 'path'

// import components
import getGeneralRatings from '../getArrays/getGeneralRatings'
import calcAvg from '../calcAvg/calcAvg'

const allReviewsPath = path.join(__dirname, '../../data/reviews.json')
const generalRatingsArray = []
const allReviews = []
const resultObj = {generalRatingResult: null}

const fetchData = (req, res) => {
  fs.readFile(allReviewsPath, 'utf8', (err, data) => {
    if (err) throw err
    allReviews.push(JSON.parse(data))
    // console.log(allReviews);
    getGeneralRatings(allReviews, generalRatingsArray)
    // console.log(generalRatingsArray);
    resultObj.generalRatingResult = calcAvg(generalRatingsArray)
    // console.log(resultObj);
    res.send(resultObj)
  })
}

export default fetchData
