let array =[1, 2, 3, 4, 5];
console.log("array length: " + array.length); // Output: array length: 5

let arrayLength=array.length;

//for loop
//for(iniytialization; condition; increment/decrement) { }
for(let i=0; i<arrayLength;i++){
    let element =array[i];
    console.log("element at index" +i + " is " + element);
}