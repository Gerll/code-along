//---------IIFE---------
//js1 first file loaded.
var myApp = {

}

//js2
(function (){
    myApp.add = function(a, b) {
        return a + b;
    }
})();

//JQuery uses this: allows us to use $



//---------CommonJS + Browserfy---------
//js1
module.exports = function add(a, b){
    return a + b;
}

//js2
// asumiendo que el nombre del archivo se llama add
var add = require("./add");



//---------ES6+Webpack2---------
//js1
export const add = (a, b) => a + b;
//or
export default function add() {
    return a + b;
}
//js2
import { add } from './add';
//or
import add from './add';



//webpack 
//  exaple of config file
module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}
