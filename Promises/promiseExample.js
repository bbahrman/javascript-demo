// single promise
var slowCall = new Promise(function (resolve, reject){
    setTimeout(function (){
        resolve(10);
        //reject ('Error val');
    },2000);


slowCall
.then(function (result) {
    console.log('Promise resolved with value: ' + result);
})
.catch(function (err) {
    console.log('Error = ' + err);
});

//-----------------------------------------------------------
// Promise all

var slowCall = new Promise(function (resolve, reject){
    setTimeout(function (){
        resolve(10);
        //reject ('Error string');
    },2000);
});

var quickCall = new Promise(function (resolve, reject){
    resolve('Some other val');
    //reject ('error');
});


quickCall
.then(function (result) {
    console.log('Promise2 resolved with value: ' + result);
})
.catch(function (err) {
    console.log('Error in promise2 = ' + err);
});

Promise.all([
    slowCall,
    quickCall
]).then(function (results){
    console.log('Finished both functions');
    for(var i = 0; i < results.length; i++) {
        console.log('Result ' + i + ' = ' + results[i]);
    }
}).catch(function (err) {
    console.log('Error in promise all = ' + err);
});

// -----------------------------------------------------------
// function examples
function slowAdd (firstNum, secondNum) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(typeof firstNum === 'number' && typeof secondNum === 'number'){
                resolve(firstNum + secondNum);
            } else {
                reject('Both arguments must be numbers');
            }
            //reject ('Error string');
        }, 2000);
    });
}

var firstAdd = slowAdd(10, 5);

var secondAdd = firstAdd
    .then(function (result) {
        console.log('First result = ' + result);
        return slowAdd(result, 10);
    })
    .catch(function (err) {
        console.log('Error in first add function = ' + err)
    });

secondAdd
    .then(function (result) {
        console.log('Second result = ' + result);
        return slowAdd(result, 10);
    })
    .catch(function (err) {
        console.log('Error in second add function = ' + err)
    });