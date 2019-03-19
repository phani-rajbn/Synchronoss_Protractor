//If a composite data as to be represented in UR Code without a heavy object creation, U could go for interfaces. Interfaces internally are like structs of C....
interface employee{
    empId: number;
    empName: string;
    empAddress: string;
}
var empObj = {empId: 123, empName : "Phaniraj", empAddress:"Bangalore", empSalary : 45000};
//Use interface object if U want to extract data from a external Json file and populate it into a type safe data .....
function printNames(emp: employee){
    console.log("The Name is " + emp.empName)
    console.log("The Address is " + emp.empAddress)
    console.log("The Id is " + emp.empId)
}

printNames(empObj);