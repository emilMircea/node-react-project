// const calcAvg = arr => arr.reduce((p, c) => {p + c}, 0)
const calcAvg = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length
export default calcAvg