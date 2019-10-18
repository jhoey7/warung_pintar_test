const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  router = require('./app/routes/appRoutes'),
  dotenv = require('dotenv')

dotenv.config();


let server;
if (process.env.NODE_ENV == "development") {
  server = app.listen(process.env.PORT);
  console.log(`Your server is running on port ${process.env.PORT}.`);
} else {
  server = app.listen(process.env.PORT);
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

router(app);

module.exports = server;