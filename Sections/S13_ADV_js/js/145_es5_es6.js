/*const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90){
    let wizardLevel = true;
}

const obj = {
    player: 'bobby',
    experience: '100',
    wizardLevel: 'false'
}
*/

//Destructuring
const a = 'Simon';
const b = true;
const c = {};
const obj = {
    a:a, 
    b: b, 
    c: c
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
/*
const { player, experience } = obj;
let { wizardLevel } = obj;
*/

//Template strings
const name = "sally";
const age = 34;
const pet = "horse";
//const greeting = "Hello" + name + "you seem to be doing " + greeting + "!";
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;

//Default arguments
function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}

//Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

//Arrow function
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;
