"use strict";
exports.__esModule = true;
//Classes are the fundamental unit of any OOP. The are created as user defined types with a host of features that make it reusable, easy maintainable and deployable. OOP is based on the SOLID Principles: Single reponsibility, Open-Closed principle, Luskov's substitution principle, Interface segregation and Dependency inversion principle. 
//The class will have members like: fields(data), properties(Accessors), functions(manipulators), nested classes and interfaces....
//by default all members are public.
var Customer = /** @class */ (function () {
    //constructor is a sp function that is invoked when the object(variable) of this class is created.
    function Customer(id, name, addr) {
        this.cstCode = id;
        this.cstName = name;
        this.cstAddress = addr;
    }
    Customer.prototype.printInfo = function () {
        console.log("The Name:" + this.cstName + " from " + this.cstAddress + " with a Code as " + this.cstCode);
    };
    return Customer;
}());
exports.Customer = Customer;
var employee = /** @class */ (function () {
    function employee(no, name, addr) {
        this.no = no;
        this.name = name;
        this.addr = addr;
    }
    employee.prototype.printData = function () {
        console.log("The name is " + this.name);
    };
    return employee;
}());
exports.employee = employee;
