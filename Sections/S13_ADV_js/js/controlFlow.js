//condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAswer = 
    "Your account # is " + (isUserValid(false) ? "1234" : "not available");

//Puede ser de de la misma manera
function condition() {
    if(isUserValid(true)){
        return "You may enter";
    }else{
        return "Access denied";
    }
}
var answer2 = condition();