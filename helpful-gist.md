**Convert date number into date string**

```js
var numberFromJsonFile = 1266252490713
date = new Date(numberFromJsonFile) // => Mon Feb 15 2010 17:48:10 GMT+0100 (CET)
```

```js
// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');
```

```js
// get the general rating array
data.map(i => i.ratings.general.general) // -> yields array with all general ratings
```

```js
// go through an array of names for each name make an array of ratings
aspectsKeywords = Object.keys(aspects[0]) // -> yields array with 24 aspects props

// get the general rating array
const aspects = data.map(i => i.ratings.aspects)
aspects.map(i => i.location)

```

```js
// calc average
const generalRatings = []
data.map(i => generalRatings.push(i.ratings.general.general)) // -> yields array with all general ratings
const average = generalRatings => generalRatings.reduce( ( p, c ) => p + c, 0 ) / generalRatings.length;
```

```js
// extract arrayRatings & Weights - terminal
current_year = new Date().getFullYear()
year_of_review = (val) => new Date(val).getFullYear()

constantWeight = 0.5
variableWeight = (val) =>  1 - (current_year - year_of_review(val)) * 0.1

generalRatingsWithWeights = (arr) => arr.map(item => current_year - year_of_review(item.entryDate) > 5 ? [item.ratings.general.general, constantWeight] : [item.ratings.general.general, variableWeight(item.entryDate)])
ratingsWeights = generalRatingsWithWeights(arr)
avg = ratingsWeights.reduce((acc, i) => acc += i[0], 0) / ratingsWeights.length // 8.48

```
