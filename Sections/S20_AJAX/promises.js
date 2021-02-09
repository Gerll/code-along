const { result, reject } = require("lodash");

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    } else{
        reject('Error, is broke');
    }
})

const promise2 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 100, 'HI')
})

const promise3 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 1000, 'pookie')
})

const promise4 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 3000, 'its it me you are looking for?')
})

Promise.all([
    promise,
    promise2,
    promise3,
    promise4
])
.then(values => {
    console.log(values);
})

promise
.then(result => result + '!')
.then(result => result2 + '?')
.catch(() => console.log('error!'))
.then(result => {
    console.log(result3 + '!');
})