//server.js

//importing all the dependencies we need

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import model from './models/comment'

// creating instances
const app = express();
const router  = express.Router();

const API_PORT = process.env.API_PORT || 3000;

// db config -- set your URI from mLab in secrets.js
mongoose.connect('mongodb://localhost/mongo_learning', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//look for json data in the req ob by body-parser
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(logger('dev'));

//initalize the api with the route path
router.get('/',(req,res)=>{
  res.json({message : 'welcome to the world'});
})

app.use('/api',router);

app.listen(API_PORT,()=> console.log(`listening on port ${API_PORT}`));
