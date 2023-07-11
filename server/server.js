//require in dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');

//set express functionallity to 'app' and establish PORT
const app = express();
const PORT = 3000;

//TODO:require routers

const exampleRouter = require('./routes/exampleRouter.js');

//convert incoming requests to JSON
app.use(express.json());
app.use('*', express.urlencoded({ extended: true }));
app.use(cookieParser());

//TODO: handle requests for static files

//TODO:handle specific route requests
app.use('/api', exampleRouter);

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../../dist')));
}

// serve index.html on the route '/'
//TODO:handle generic request to serve HTML file
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

//TODO:catch-all route for unknown requests
app.use((req, res) => {
  res.sendStatus(404);
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);

  return res.status(errorObj.status).json(errorObj.message);
});

//listen on PORT 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

//export app
module.exports = app;
