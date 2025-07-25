// string
let name = "Dheeraj";
console.log(name);

// let is keyword for variable declaration
// let variableName = value

// number
let age = 26;
console.log(age);
console.log("my age is " + age);
console.log("my age is ", age);

// float
let height = 5.9;
console.log(height);
// in c, printf("%f", height);

// javascript dynamic type langauge (we don't define type of variable/data)
// c, c++, java static type language (we define type of variable/data))
// int age = 36; string name = "dheeraj"; float height = 5.9;
// in js, we just use let keyword to take any type of date value


// boolean
let isMarried = false;
console.log(isMarried);

// is js case sensitive?
let a = 10; // a in smaller case variable
let A = 20; // A in capital case variable
console.log(a, A); // 10 20
// js is not case sensitive language

//object data type
let person = {
    name: "Akhnita",
    age: 20,
    address:{
        city: "Kathua",
        state: "Jammu and Kashmir"}

}
console.log(person);
console.log(person.name);

let address={
    "key1":"string value",//value is string
    "key2": 100, //value is number
    "homeaddress":{"city":"Kathua"},
    "officeaddress": { "city":"Jammu and Kashmir"} //value is object
}

//array data type
let myfriends=["akhnita",'anuj', 'amit', 'priya'];
console.log(myfriends);
console.log(myfriends[0]); // array start from index 0
console.log(myfriends[2]);
//my best friend is amit & priya

console.log("my best friend are " + myfriends[2] + " & " + myfriends[3]);
console.log(`my best friend are ${myfriends[2]} & ${myfriends[3]}`); // template literal
// template literal is used to print variable value in string
// it is enclosed in backticks ` `

//date data type
let currentDate = new Date();//date is class in js

console.log(currentDate);

let myDOB = new Date("2006-03-06");//year-month-day format

console.log(myDOB);
console.log("dob yearr"  +myDOB.getFullYear());//get year from date
console.log("dob month"  +(myDOB.getMonth() +1));//added 1 because month is 0 indexed in js
console.log("dob date"  +myDOB.getDate());//get day from date

console.log("my expression"  + 1 + 5);//my expression 15
console.log("my expression"  +(1 + 5));//my expression 6

