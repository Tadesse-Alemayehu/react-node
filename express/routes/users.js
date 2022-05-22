const express = require('express');
const route = express.Router();
const mySql = require('mysql');

const db = mySql.createConnection({
  host: 'localhost',
  user: 'express',
  database: 'express',
  password: 'express'
});

route.get('/', (request, response) => {
  console.log("rote users page");
  response.send("request to the home page");
});

route.post('/add-new-user', (request, response) => {
  console.log("adding new user", request.body);
  db.connect();
  db.query(`insert into express_users values(default,'tadesse-x','t-x','a-x');`,
    (error, result) => {
      if (error)
        console.error("errore is", error)
      else
        console.log("sucess");
    });
  response.send("end add new user request");
})

route.get('/users', (request, response) => {
  console.log('getting all users');
  response.send('response is done')
})
module.exports = route;