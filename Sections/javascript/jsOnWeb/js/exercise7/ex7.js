// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
/*
var userAdmin = {
    username: "baikit",
    password: "qwerty"
};
*/
// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
    {
        username: "baikit",
        password: "qwerty"
    },
    {
        username: "adw",
        password: "loop"
    },
    {
        username: "utro",
        password: "coma"
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
 var newsfeed = [
     {
         username: "Zita",
         timeline: "My Bond With You and You"
     },
     {
         username: "Porter",
         timeline: "Years Of War"
     },
     {
         username: "Goldfish",
         timeline: "Fort Nox"
     }
 ];
 var userNamePromt = prompt("What's your username?");
 var passwordPromt = prompt("What's your password?");

 function isUserValid(username, password){
    for (var i = 0; i < database.length; i++){
        if(database[i].username === username
           && database[i].password === password){
               return true;
        }
    }
    return false;
 }

 function signIn(username, password){
    //console.log(isUserValid(user, pass));
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    }else{
        alert("Sorry, wrog username or password");
    }
 }

 signIn(userNamePromt, passwordPromt);