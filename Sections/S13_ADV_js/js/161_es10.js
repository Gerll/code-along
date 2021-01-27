//  .flat()

const array = [1,2,3,4,5];
array.flat();

const array2 = [1,[2,3],[4,5]];
array2.flat();

const array3 = [1,2,[3,4,[5]]];
array3.flat(2);

// Limpiar el arreglo
const jurassicPark = [['1','2'],'3','4',['5','6'],[[[['T-rex']]]]];

const entries = ['bob', 'sally',,,,,,,,,,,'cindy'];
entries.flat();

//  flapMap();
const jurassicParkChaos = jurassicPark.flatmap(creature => creature + 't-rex');

const userEmail = '       somepeople@gmail.com';
const userEmail2 = 'anotherpeople@gmail.com       ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

//  fromEntries

userProfiles = [['comerderTom', 23], ['derekZlander',40], ['hansel', 18]];

Object.fromEntries (userProfiles);
//  Para acomodarlos de manera correcta y no tener problemas 
const obj = Object.fromEntries (userProfiles);
Object.entries(obj);

//  Update
try {
    true + 'hi';
} catch(error){
    console.log('you messed up' + error);
}