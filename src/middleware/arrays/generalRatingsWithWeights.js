// to calc weighted_avg first make an array of arrays in the form: arr = [[rating, weight], [rating, weight]....]

// arrayRatingsWeights = arr.map(i => current_year - year_of_review(i.entryDate) > 5 ? [i.ratings.general.general, constantWeight] : [i.ratings.general.general, variableWeight(i.entryDate)])

// arrayRatingsWeights = arr.map(i => current_year - year_of_review(i.entryDate) > 5 ? [generalRating(i), constantWeight] : [generalRating(i), variableWeight(i.entryDate)])

// const getGeneralRatings = (allReviewsArray, emptyArr) => allReviewsArray.map((i) => i.map((item) => emptyArr.push(item.ratings.general.general)))

// const generalRatingsWithWeights = (allReviewsArray, emptyArr) => allReviewsArray.map((i) => i.map((item) => arrayRatingsWeights.push(item.ratings.general.general, current_year - year_of_review(item.entryDate) > 5 ? constantWeight : variableWeight)))

// const generalRating = (obj) => obj.ratings.general.general

const current_year = new Date().getFullYear()
const year_of_review = val => new Date(val).getFullYear()

const constantWeight = 0.5
const variableWeight = val => 1 - (current_year - year_of_review(val)) * 0.1

// const generalRatingsWithWeights = (arr) => arr.map(i => i.map( item => current_year - year_of_review(item.entryDate) > 5 ? [item.ratings.general.general, constantWeight] : [item.ratings.general.general, variableWeight(item.entryDate)]))

const generalRatingsWithWeights = arr =>
	arr.map(i =>
		i.map(
			item =>
				current_year - year_of_review(item.entryDate) > 5
					? (item.ratings.general.general, constantWeight)
					: (item.ratings.general.general, variableWeight(item.entryDate))
		)
	)

export default generalRatingsWithWeights
