//2 types of functions: named and anonymous functions....
function getEmployees() : string[]{//named function as it refered in the code by its name...
    return ["Phaniraj","Kumar","Suman","Rajesh"]
}

interface Customer{
    cstNo: number;
    cstName : string;
    cstAddress : string;
}
let someName =  (args:Customer) => console.log(`The name is ${args.cstName} from ${args.cstAddress}`);


someName(<Customer>{ cstNo : 123, cstAddress : "Bangalore", cstName :"Phaniraj"});
//Anonymous methods are methods that are created on the fly and are refered by the objects that it returns...
let addFunc = function(num1: number, num2: number): number{
    return num1+ num2;
}

let subFunc = (v1: number, v2: number) => v2 - v1;
//console.log(subFunc(123, 23));
//console.log(addFunc(123, 234));

var data = getEmployees();
//console.log(data);//reading the object....

//Anonymous methods further extended to be Arrow methods.....
//data.forEach((e) => console.log(e));
/* Function parameters in TypeScript**/
//regular parameters, optional parameters, default parameters, rest parameters.
//? parameters are optional parameters...
function displayDetails(id: number, name :string, address? :string){
    let details = `The ID is ${id}\nThe Name: ${name}\nThe Address:${address != undefined ? address :"Not available"}`;
    console.log(details);
} 
 //displayDetails(123, 'Phaniraj');
 //displayDetails(123, 'Phaniraj', 'Bangalore');
//default parameters:
function displayCompleteDetails(id: number, name: string, address: string ="Bangalore"){
    let details = `The ID is ${id}\nThe Name: ${name}\nThe Address:${address}`;
    console.log(details);
}

/* displayCompleteDetails(123, 'Phaniraj')
displayCompleteDetails(123, 'Phaniraj','Mysore'); */
//rest parameters provides the feature of variable no of args to be passed to a function. rest should be the last of the paremter list. 

function displayFullName(fname : string, ...otherNames : string[]) {
    let fullname = fname;
    otherNames.forEach(n=>fullname += " " + n);
    console.log(fullname);
}

function findSum(...numbers: number[]){
    let final = 0.0;
    numbers.forEach(n=>final +=n);
    console.log(final);
}
displayFullName('Phaniraj','Bommathanahalli','Nagendra');
findSum(123, 234,456.345, 345,543.234, 345.2);//variable no of parameters are passed into the function....



