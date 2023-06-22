const express = require ('express');
const app = express();
const router = require('./routes/crud');
// bodyParser = require('body-parser');

// // support parsing of application/json type post data
// app.use(bodyParser.json());

// //support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",router)
const port = process.env.port||3050
app.listen (port, ()=>{
 console.log(`listening on ${port}`)
})