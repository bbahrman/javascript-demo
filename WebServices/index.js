const https = require('https');

// stealing demo url from https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
// swap in any url which supports get or swap in a non url to test promise rejection
const getURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

// create promise, we could use a library which does this for us, but keeping it native for now
const httpPromise = new Promise((resolve, reject) => {
    https.get(getURL, (resp)=>{
        let data = '';

        // A chunk of data has been received.
        // the .on is an part of the eventEmitter class
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            resolve(data);
        });
    }).on('error', (err) => {
        reject(err);
    });
});

// what happens once the promise is resolved or rejected
httpPromise
    .then((response)=>{
        console.log('response returned ' + response);
    })
    .catch((err) => {
        console.log('error =  ' + err)
    });


