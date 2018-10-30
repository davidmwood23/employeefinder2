const express = require('express');
const path= ('path');
const employeeList = require('../data/employees.js');
module.exports = function (app) {
  // API Requests 
  // GET Request
  app.get('/api/employees', function (req, res) {
    //console.log(employeeList);
    res.json(employeeList);
  });


app.post('/api/employees', function (req,res) {
    console.log(req.body);
    employeeList.push(req.body)
   res.json(employeeList[1]);
 });
}




