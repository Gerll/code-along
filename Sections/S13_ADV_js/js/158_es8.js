//  String paddin
//  .padStart();
//  .padEnd();
'Turtle'.padStart(10);
'Turtle'.padEnd(10);

//
const fun = (a,b,c,d,) => {
    console.log(a);
}
fun(1,2,3,4,);

//
//  Object.values
//  Object.entries
//  Objetc.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) =>{
    console.log(key, obj[key]);
})

Object.values(obj).forEach(values => {
    console.log(values);
})

Object.entries(obj).forEach(values => {
    console.log(values);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
});

//Async Await