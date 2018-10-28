const express = require('express');
const path= ('path');
const employeeList = require('../data/employees.js');
module.exports = function (app) {
  // API Requests for /api/ employeeList
  // GET Request
  // This will be used to display a JSON of all possible employees.
  app.get('/api/employees', function (req, res) {
    //console.log(employeeList);
    res.json(employeeList);
  });
}




