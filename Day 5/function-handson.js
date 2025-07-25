//function is  a block of code designed to perform a particular task
//function is reusable code
//function payFee(payment) -> payFee is a function that take payment a pay a fees
//syntax: function functionName(parameter1, parameter2, ...) {};
//function is a keywor

function greet(){
    //block of code  
    console.log("hello,my name is akhnita");
    console.log("I am 20 years old");
    //block end here
}
//function call-> write na,e of function (greet) with parameteres()
greet();

//function with parameters
function greetWithName(name){
    //name is a parameter
    console.log("hello, my name is " + name);
}
greetWithName("Akhnita");

//function with multiple parameters
function greetWithDetails(firstName, lastName){
    //firstName and lastName are parameters
    console.log("hello, my name is " + firstName + " " + lastName);
    console.log("hello.my name is ${firstName} ${lastNmae}");

}
greetWithDetails("Akhnita", "Bharti");

//function with return value
function addNumbers(a, b){
    return a + b;
}
let result = addNumbers(10,20);
console.log("The sum is: " + result);

//sub function
function subNumbers(a, b){
    return a - b;
}
let subResult = subNumbers(20, 10);
console.log("The difference is: " + subResult);


