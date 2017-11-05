const getGeneralRatings = (allRevArr, emptyArr) => allRevArr.map((i) => i.map((item) => emptyArr.push(item.ratings.general.general)))

export default getGeneralRatings
