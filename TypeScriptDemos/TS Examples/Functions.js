//2 types of functions: named and anonymous functions....
function getEmployees() {
    return ["Phaniraj", "Kumar", "Suman", "Rajesh"];
}
var someName = function (args) { return console.log("The name is " + args.cstName + " from " + args.cstAddress); };
someName({ cstNo: 123, cstAddress: "Bangalore", cstName: "Phaniraj" });
//Anonymous methods are methods that are created on the fly and are refered by the objects that it returns...
var addFunc = function (num1, num2) {
    return num1 + num2;
};
var subFunc = function (v1, v2) { return v2 - v1; };
//console.log(subFunc(123, 23));
//console.log(addFunc(123, 234));
var data = getEmployees();
//console.log(data);//reading the object....
//Anonymous methods further extended to be Arrow methods.....
//data.forEach((e) => console.log(e));
/* Function parameters in TypeScript**/
//regular parameters, optional parameters, default parameters, rest parameters.
//? parameters are optional parameters...
function displayDetails(id, name, address) {
    var details = "The ID is " + id + "\nThe Name: " + name + "\nThe Address:" + (address != undefined ? address : "Not available");
    console.log(details);
}
//displayDetails(123, 'Phaniraj');
//displayDetails(123, 'Phaniraj', 'Bangalore');
//default parameters:
function displayCompleteDetails(id, name, address) {
    if (address === void 0) { address = "Bangalore"; }
    var details = "The ID is " + id + "\nThe Name: " + name + "\nThe Address:" + address;
    console.log(details);
}
/* displayCompleteDetails(123, 'Phaniraj')
displayCompleteDetails(123, 'Phaniraj','Mysore'); */
//rest parameters....
function displayFullName(fname) {
    var otherNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherNames[_i - 1] = arguments[_i];
    }
    var fullname = fname;
    otherNames.forEach(function (n) { return fullname += " " + n; });
    console.log(fullname);
}
displayFullName('Phaniraj', 'Bommathanahalli', 'Nagendra');
