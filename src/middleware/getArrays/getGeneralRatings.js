const getGeneralRatings = (allReviewsArray, emptyArr) => allReviewsArray.map((i) => i.map((item) => emptyArr.push(item.ratings.general.general)))

export default getGeneralRatings
