// requiring node modules
const express = require('express');
// requiring source files
const routes = require('./src/middleware/routes/routes');
// consts
const app = express();

// middleware
app.use('/', routes);


// arrow functions
const server = app.listen(3000, () => {
	// destructuring
  const {address, port} = server.address();

  // string interpolation:
  console.log(`App listening at http://${address}:${port}`);
});
