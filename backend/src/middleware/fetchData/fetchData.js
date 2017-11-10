const reviews = require('../../data/reviews.json')
const fs = require('fs')
const path = require('path')

const allReviewsPath = path.join(__dirname, '../../data/reviews.json')

// constant for calc averages
const current_year = new Date().getFullYear()
const year_of_review = val => new Date(val).getFullYear()
const constantWeight = 0.5
const variableWeight = val => 1 - (current_year - year_of_review(val)) * 0.1

const fetchData = (req, res) => {
	fs.readFile(allReviewsPath, 'utf8', (err, data) => {
		if (err) throw err
		// all data
		const allReviews = JSON.parse(data)

		let average = {
			general: 0,
			accessibility: 0,
			activities: 0,
			advancedSkiArea: 0,
			apresSki: 0,
			atmosphere: 0,
			beach: 0,
			childFriendly: 0,
			culture: 0,
			entertainment: 0,
			environmental: 0,
			food: 0,
			interior: 0,
			location: 0,
			nightlife: 0,
			noviceSkiArea: 0,
			pool: 0,
			priceQuality: 0,
			restaurants: 0,
			room: 0,
			sanitaryState: 0,
			service: 0,
			size: 0,
			surrounding: 0,
			terrace: 0
		}

		for (let review of allReviews) {
			if (current_year - year_of_review(review.entryDate) > 5) {
				average.general += review.ratings.general.general * constantWeight / allReviews.length
				average.location += review.ratings.aspects.location * constantWeight / allReviews.length
				average.service += review.ratings.aspects.service * constantWeight / allReviews.length
				average.priceQuality += review.ratings.aspects.priceQuality * constantWeight / allReviews.length
				average.food += review.ratings.aspects.food * constantWeight / allReviews.length
				average.room += review.ratings.aspects.room * constantWeight / allReviews.length
				average.childFriendly += review.ratings.aspects.childFriendly * constantWeight / allReviews.length
				average.interior += review.ratings.aspects.interior * constantWeight / allReviews.length
				average.size += review.ratings.aspects.size * constantWeight / allReviews.length
				average.activities += review.ratings.aspects.activities * constantWeight / allReviews.length
				average.restaurants += review.ratings.aspects.restaurants * constantWeight / allReviews.length
				average.sanitaryState += review.ratings.aspects.sanitaryState * constantWeight / allReviews.length
				average.accessibility += review.ratings.aspects.accessibility * constantWeight / allReviews.length
				average.nightlife += review.ratings.aspects.nightlife * constantWeight / allReviews.length
				average.culture += review.ratings.aspects.culture * constantWeight / allReviews.length
				average.surrounding += review.ratings.aspects.surrounding * constantWeight / allReviews.length
				average.atmosphere += review.ratings.aspects.atmosphere * constantWeight / allReviews.length
				average.noviceSkiArea += review.ratings.aspects.noviceSkiArea * constantWeight / allReviews.length
				average.advancedSkiArea += review.ratings.aspects.advancedSkiArea * constantWeight / allReviews.length
				average.apresSki += review.ratings.aspects.apresSki * constantWeight / allReviews.length
				average.beach += review.ratings.aspects.beach * constantWeight / allReviews.length
				average.entertainment += review.ratings.aspects.entertainment * constantWeight / allReviews.length
				average.environmental += review.ratings.aspects.environmental * constantWeight / allReviews.length
				average.pool += review.ratings.aspects.pool * constantWeight / allReviews.length
				average.terrace += review.ratings.aspects.terrace * constantWeight / allReviews.length
			} else {
				average.general += review.ratings.general.general * variableWeight(review.entryDate) / allReviews.length
				average.location += review.ratings.aspects.location * variableWeight(review.entryDate) / allReviews.length
				average.service += review.ratings.aspects.service * variableWeight(review.entryDate) / allReviews.length
				average.priceQuality += review.ratings.aspects.priceQuality * variableWeight(review.entryDate) / allReviews.length
				average.food += review.ratings.aspects.food * variableWeight(review.entryDate) / allReviews.length
				average.room += review.ratings.aspects.room * variableWeight(review.entryDate) / allReviews.length
				average.childFriendly += review.ratings.aspects.childFriendly * variableWeight(review.entryDate) / allReviews.length
				average.interior += review.ratings.aspects.interior * variableWeight(review.entryDate) / allReviews.length
				average.size += review.ratings.aspects.size * variableWeight(review.entryDate) / allReviews.length
				average.activities += review.ratings.aspects.activities * variableWeight(review.entryDate) / allReviews.length
				average.restaurants += review.ratings.aspects.restaurants * variableWeight(review.entryDate) / allReviews.length
				average.sanitaryState += review.ratings.aspects.sanitaryState * variableWeight(review.entryDate) / allReviews.length
				average.accessibility += review.ratings.aspects.accessibility * variableWeight(review.entryDate) / allReviews.length
				average.nightlife += review.ratings.aspects.nightlife * variableWeight(review.entryDate) / allReviews.length
				average.culture += review.ratings.aspects.culture * variableWeight(review.entryDate) / allReviews.length
				average.surrounding += review.ratings.aspects.surrounding * variableWeight(review.entryDate) / allReviews.length
				average.atmosphere += review.ratings.aspects.atmosphere * variableWeight(review.entryDate) / allReviews.length
				average.noviceSkiArea += review.ratings.aspects.noviceSkiArea * variableWeight(review.entryDate) / allReviews.length
				average.advancedSkiArea += review.ratings.aspects.advancedSkiArea * variableWeight(review.entryDate) / allReviews.length
				average.apresSki += review.ratings.aspects.apresSki * variableWeight(review.entryDate) / allReviews.length
				average.beach += review.ratings.aspects.beach * variableWeight(review.entryDate) / allReviews.length
				average.entertainment += review.ratings.aspects.entertainment * variableWeight(review.entryDate) / allReviews.length
				average.environmental += review.ratings.aspects.environmental * variableWeight(review.entryDate) / allReviews.length
				average.pool += review.ratings.aspects.pool * variableWeight(review.entryDate) / allReviews.length
				average.terrace += review.ratings.aspects.terrace * variableWeight(review.entryDate) / allReviews.length
			}
		}

		res.send(average)
	})
}

module.exports = fetchData
