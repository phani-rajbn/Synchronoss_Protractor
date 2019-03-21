//Abstract classes are classes that are having atleast one abstract method. A method which contains only signature with no implementation is called as abstract methodss. Abstract classes are designed for scenarios where there is a partial implementations and derived classes could implement the rest of the Class structure. The functions would be not clear and the sub classes would provide specific implementations of those functions.  As abstract classes are incomplete(one or more methods are not implemented), they cannot be instantiated. They are instantiated to their derived classes and consumed. Derived classes must implement all the abstract methods of its base class. Else even the derived class should be marked as abstract class. 
abstract class BaseAccount{  
    constructor(public id: number, public name: string, protected balance: number) {
        
    }
    credit(amount: number){
        this.balance += amount;
    }

    debit(amount: number){
        if(amount > this.balance)
            throw ("Insufficient Funds");
        this.balance-= amount;
    }

    abstract calculateInterest(): number;//This function is not implemented, UR Class is imcomplete and hense it cannot be instantiated....
}

class SBAccount extends BaseAccount{
    calculateInterest(): number {
       let interest = this.balance * 0.07 * 1/12;
       this.balance+= interest;
       return this.balance;   
    }
}
let acc : BaseAccount;//variable of the type BaseAccount;
acc = new SBAccount(111, 'Phaniraj',6000);
acc.credit(2346);
acc.debit(2344);
console.log(`The Balance after the interest calculation is ${acc.calculateInterest()}`);
//Rules: The derived class must implement all the abstract methods of the base class. The derived class cannot modify the access specifier of the method that is declared in the base class. It is very similar to method overriding except the base class does not have any implementation. It means that the derived class cannot modify the signature that is defined in the base version of the method. 


 