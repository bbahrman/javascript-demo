const slowCall = require('./Promises/promiseExample');

var firstCall = slowCall.add(10, 20);

firstCall.then(function (result) {
    console.log('Result 1 = ' + result);
});