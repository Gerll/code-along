var todos = [
    "clean room",
    "brush teeth",
    "excercise",
    "study javascript",
    "eat healthy"
];

var todosLenght = todos.length;
for (var i=0; i < todosLenght; i++){
    //console.log(todos[i]);
    //todos[i] = todos[i] + "!";
    //todos.pop();
    console.log(i);
}

todos.forEach(function(todo, i){
    console.log(todo, i);
})

function logTodos(todo, i){
    console.log(todo, i);
}
todos.forEach(logTodos);

/*
var counterOne = 0;
while (counterOne < 10){
    console.log(counterOne);
    counterOne++
}

var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);
*/