//Classes are the fundamental unit of any OOP. The are created as user defined types with a host of features that make it reusable, easy maintainable and deployable. OOP is based on the SOLID Principles: Single reponsibility, Open-Closed principle, Luskov's substitution principle, Interface segregation and Dependency inversion principle. 
//The class will have members like: fields(data), properties(Accessors), functions(manipulators), nested classes and interfaces....
//by default all members are public.
export class Customer{
  private cstCode: number;
  private cstName : string;
  private cstAddress : string;//Means that the members are accessible only within the class declaration block.....

  //constructor is a sp function that is invoked when the object(variable) of this class is created.
  constructor(id: number, name : string, addr : string) {
    this.cstCode = id;
    this.cstName = name;
    this.cstAddress = addr; 
  } 

  printInfo(){
      console.log(`The Name:${this.cstName} from ${this.cstAddress} with a Code as ${this.cstCode}`);
  }
}

//Injectors are the components that are used within UR class. These injectors may be external objects that make UR Component. They can be included in the object at the time object creations. So we could use it as private members thro the constructor syntax. Angular Framework uses this syntax for injecting component dependencies into the component. 
export class employee{
     constructor(private no : number, private name: string, private addr : string) {
     }   

     printData(){
         console.log(`The name is ${this.name}`)
     }
}


