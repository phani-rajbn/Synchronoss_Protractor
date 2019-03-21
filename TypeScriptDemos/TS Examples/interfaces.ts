interface testInterface{
    testFunc();
}//interfaces cannot have implementations in them. the methods are declared and are implemented in the class that implements it. All the methods of the interface must be implemented by the implementor. else the class is called as ABSTRACT CLASSES....

class testComponent implements testInterface{
    testFunc(){
        console.log("Test func must be implemented by the Implementor class")
    }
}

let com = new testComponent();
com.testFunc();