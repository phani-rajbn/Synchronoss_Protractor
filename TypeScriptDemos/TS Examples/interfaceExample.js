var empObj = { empId: 123, empName: "Phaniraj", empAddress: "Bangalore", empSalary: 45000 };
//Use interface object if U want to extract data from a external Json file and populate it into a type safe data .....
function printNames(emp) {
    console.log("The Name is " + emp.empName);
    console.log("The Address is " + emp.empAddress);
    console.log("The Id is " + emp.empId);
}
printNames(empObj);
