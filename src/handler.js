'use strict';

module.exports.hello = async event => {
    console.log('This is a test hello lambda console log');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'AWS CI/CD Test - Your function executed successfully! 3:09'
      },
      null,
      2
    ),
  };
};