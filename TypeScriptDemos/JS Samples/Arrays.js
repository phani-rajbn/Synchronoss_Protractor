var elements = ["Apple","Mango","Orange"];
console.log(elements);//gets the data structure of the elements....
console.log(typeof(elements));//gets the data type of the elements
elements.forEach(element => {
    //alert(element)
});//foreach is  forward only and read only mechanism of reading the contents of the array without a need of an indexer. U dont go out of bounds when U iterate thro the array. Foreach is applicable only on collections....

function getElements(){
    return elements;
}

function addElement(element){
    elements.push(element)//adds the element to the bottom of the list....
}

function removeElement(index){
    //get the index of the element
    //var index = elements.indexOf(element);
    elements.splice(index, 1);//removes the element from the specified index upto the no specified in the 2nd arg....
}
var e = new emp(123, 'Phaniraj','Bangalore');
console.log(typeof(e));

var empRepository = function(){
    var data = [new emp(123, 'Phaniraj', 'Bangalore'), new emp(123, 'Phaniraj', 'Bangalore'), new emp(123, 'Phaniraj', 'Bangalore'), new emp(123, 'Phaniraj', 'Bangalore')];//this is blank array....
    this.addEmployee = function(emp){
        data.push(emp);
    }

    this.deleteEmp = function(id){
        var selected = data.find((arg)=> arg.empID == id);
        if(selected == null)
            throw "Employee not found";
        var index = data.indexOf(selected);
        data.splice(index, 1);
        alert("Employee deleted successfully");
    }

    this.update = function(emp){
        var selected = data.find((e)=>e.empID == emp.empID);
        selected.empName = emp.empName;
        selected.empAddress = emp.empAddress;
        alert("employee is updated")
    }
    this.getAllEmployees = function(){
        return data;
    }
}