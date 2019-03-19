//data types: number, boolean, string, 


function add(first : number, second : number) {
   console.log(first + second);
}


function addStrings(first : string, second : string): string {
    return first + second;
}

console.log(addStrings("Apple","Orange"));

//let is used to create implicit typed variable which has better scope management and type management than var. All local variables are recommended to be used with let keyword instead of var. 
let computedString = addStrings("FirstName", "LastName");
console.log(computedString);


let fruits : string[] =["Apple","Mango","Orange"];//syntax of declaring arrays in Typescript...
console.log(typeof (fruits));

//Tuples are used to store the data in the form of key-value pairs. The idea is to get the data in a non nummeric indexers. The key is used to represent the data that U wish to access. 
let tupleValue : [string, number];
tupleValue = ["Phaniraj", 55];//Similar to key-value pair....

let scores : [string, number[]];
scores= ["Phaniraj", [65,76,66,77]];

let user : [string, string];
user = ["userName","apple123"];

console.log(user);
console.log(user[0] + user[1]);//access the value associated with the tuple. 
console.log(scores);
console.log(tupleValue);

//If the data type is unknown at the compile time u could use any....
let vegetables : any;
vegetables ="Tomatoes";
console.log(vegetables);
vegetables =234.45;//any is similar to var where the variable can be reused again...
console.log(vegetables);



