import express from 'express'
// Importing source files
import routes from './middleware/routes/routes'
// import reviews from './middleware/fetchData/fetchData'
import reviews from './middleware/calcAvg/calcAvg'
// consts
const app = express()

app.use('/', routes)
app.use('/', reviews)
// app.use('/', calc)

// arrow functions
const server = app.listen(3000, () => {
	// destructuring
	const { address, port } = server.address()

	// string interpolation:
	console.log(`Listening at http://${address}:${port}`)
})
