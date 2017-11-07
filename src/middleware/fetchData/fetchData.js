import reviews from '../../data/reviews.json'
import fs from 'fs'
import path from 'path'

// import components
import generalRatingsWithWeights from '../arrays/generalRatingsWithWeights'
import calcAvg from '../calcAvg/calcAvg'

const allReviewsPath = path.join(__dirname, '../../data/reviews.json')
const ratingsWeights = []
const allReviews = []
const resultObj = {generalRatingResult: null}

const fetchData = (req, res) => {
  fs.readFile(allReviewsPath, 'utf8', (err, data) => {
    if (err) throw err
    allReviews.push(JSON.parse(data))
    // console.log(allReviews);
    const ratingsWeights = generalRatingsWithWeights(allReviews)
    const average = ratingsWeights.reduce((acc, i) => acc += i[0], 0) / ratingsWeights.length
    console.log(ratingsWeights);
    resultObj.generalRatingResult
    // console.log(resultObj);
    res.send(resultObj)
  })
}

export default fetchData
