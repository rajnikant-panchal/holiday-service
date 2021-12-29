'use strict';

const data = require("./dataFormatter.js");

module.exports.getAllHoliday = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(data.getData('all')),
  };
  callback(null, response);
};

module.exports.checkHoliday = (event, context, callback) => {
  const pdate = event.pathParameters.date;
  const response = {
    statusCode: 200,
    body: JSON.stringify(data.getData('date', pdate)),
  };
  callback(null, response);
};

module.exports.checkStateHoliday = (event, context, callback) => {
  const pstate = event.pathParameters.state;
  console.log(pstate);
  const response = {
    statusCode: 200,
    body: JSON.stringify(data.getData('state', pstate)),
  };
  callback(null, response);
};
