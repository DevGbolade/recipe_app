const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const thingRouter = require('./recipe-backend/routes/recipeRoute');

const app = express();

app.use(cors());
app.use(bodyParser.json())




mongoose.connect('mongodb+srv://rozay10:password10@cluster0-6ystf.mongodb.net/full-stack', { useNewUrlParser: true,} )
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

  app.use('/api', thingRouter);



 



module.exports = app;