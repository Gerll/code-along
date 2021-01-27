//Evaluate these:
//#1
[2] === [2] //false
{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5}; //5
object1.a = 4;

console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);
//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal{
    constructor(type, color, name){
        this.type = type;
        this.color = color;
        this.name = name;
    }
}

class Mamal extends Animal{
    constructor(type, color, name){
        super(type, color, name)
        console.log('mamal', this);
    }
    sound(){
        console.log(`Mooo I'm a ${this.type}, my name is ${this.name} and my colors are ${this.color}`);
    }
}

const cow = new Mamal('cow', 'black and white', 'Cowlorado');