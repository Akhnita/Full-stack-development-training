//if else statement
//we use if where we don't have definef range
let age = 4;
if (age>=18){
    console.log("you ar an adult");
}
else if (age>=13 && age<18){
    console.log("you are a teenager")
}
else{
    console.log("you are a minor");

}



//switch statement
//switch,case,break,deafult are keywords
//we use if where we have defined range
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}