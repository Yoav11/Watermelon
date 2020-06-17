const express = require('express');
let routes = require('./routes.js');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const connectionString = 'mongodb+srv://yn277:Galgalon1.@cluster0-flfqf.mongodb.net/test?retryWrites=true&w=majority'

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors({origin: `http://localhost:3000`}));

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

mongoose.connect(connectionString, { useNewUrlParser: true});
let db = mongoose.connection;

app.use('/', routes)
