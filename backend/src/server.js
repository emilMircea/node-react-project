const express = require('express')

const routes = require('./middleware/routes/routes')

const reviews = require('./middleware/calcAvg/calcAvg')

// consts
const app = express()

app.use('/', routes)
app.use('/', reviews)

// arrow functions
const server = app.listen(3000, () => {
	// destructuring
	const { address, port } = server.address()

	// string interpolation:
	console.log(`Listening at http://${address}:${port}`)
})
