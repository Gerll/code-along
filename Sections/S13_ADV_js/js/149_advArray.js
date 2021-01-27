//Advanced Arrays

const array = [1, 2 ,10 ,16];
//hacer que el "forEach multiplique el array"
const double =[];
const newArray = array.forEach(num =>{
    double.push(num * 2);
})
console.log('forEach', double);

// map, filter, reduce 

//Map
/*
const mapArray = array.map((num) => {
    num * 2;
});
*/

//Cuando es sólo se retorna un parametro
const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

//filter
/*
const filterArray = array.filter(num => {
    return num > 5
})
*/
const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

//reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0)

console.log('reduce', reduceArray);