function moveCommand(direction) {
    var whatHappens;
    switch(direction){
        case "forward":
            whatHappens= "You encounter a moster";
            break;
        case "back":
            whatHappens= "You arrived home";
            break;
        case "right":
            whatHappens= "You found a river";
            break;
        case "left":
            whatHappens= "You run into a troll";
            break;
        default:
            whatHappens = "Please enter a valid diretion";
    }
    return whatHappens;
}