var content ="Testing the content"
var empID = 123;
var isValid = true;
var data ="Some Content";
//Stores any kind of data...

function display() {
  //  alert("The data is " + data +"The EmpID is " + empID + "The data is currently " + isValid);
    //data += 123;
    //empID +=" Testing code";
    alert(typeof(empID));//to get the internal type associated with the variable...

    alert(typeof(data))
}//function defn...

//No type info is made available while U create the function....
function addFunc(firstValue, secondValue){
    return firstValue + secondValue
}
function subFunc(firstValue, secondValue){
    return firstValue - secondValue
}
function mulFunc(firstValue, secondValue){
    return firstValue * secondValue
}
function divFunc(firstValue, secondValue){
    return firstValue / secondValue
}

//object creation in Javascript ES5...
var emp = function(id, name, address){
    this.empID = id;
    this.empName =name;
    this.empAddress = address;
}//object creation is basically a return of a function. ES5 does not have any specific syntax of any UDT....

function help(){
    var value = 123;
    return function test(){
        value += 123;
        return value;
    }
}

// var res = help()();//self invoking object as this function returns another function....
//check the difference without the parenthesis....
// console.log(res);

var emp1 = new emp(123, "Phaniraj","Bangalore");
console.log(emp1);
emp1 = new emp(124, "Vinod Kumar","Bangalore");
console.log(emp1);







