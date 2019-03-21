//method overloading is a feature of OOP where a same method can be used to perform different operations based on the argument list that is passed when the function is invoked. The caller is aware of the version of the function he wishes to call based on the arguement list he passes.  This is called as COMPILE TIME POLYMORPHISM....
function add(a : number, b : number) : number;

function add(a : string, b : string) : string;

function add(a : any ,b : any) : any{
    return a + b;
}

function display(id: number, name? : string);
function display(id: number, name : string){
    console.log(id);
}

console.log(add(123, 234));//numbers...
console.log(add("Sample","String"));//strings
let v1 : any = 123;
let v2 : any = true;
console.log(add(v1, v2));//any type