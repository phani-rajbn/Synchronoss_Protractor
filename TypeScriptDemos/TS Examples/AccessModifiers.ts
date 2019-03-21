class Account{
    accNo: number;
    accName : string;
    protected balance: number;
    constructor(amount : number) {
        this.balance = amount;
    }

    credit(amount : number){
        this.balance += amount;
    }

    debit(amount: number){
        if(this.balance < amount)
            throw "Insufficient funds";
        this.balance -= amount;
    }

    getBalance(){
        return this.balance;
    }
}

//The derived class must ensure that the base class constructor is called either implicitly or explicitly using super...
class SBAccount extends Account{
    constructor(amount : number) {
        super(amount); 
    }
    credit(amount : number){
        this.balance = 45000;//acceptable as its protected member is accessible by its derived classes. 
        console.log("Crediting into SBAccount");
        super.credit(amount);
    }
    calculateInterest(){
        let amount = this.getBalance();//Base class method which is public and is useable here...
        let interest = amount * 0.065  * 1/12;
        this.balance += interest;
        //this.credit(interest);
    }
}
/* let acc = new Account(5000);
try{
    //contains the code that could raise an exception......    
    console.log("The balance is " + acc.getBalance());
    acc.credit(5000);
    acc.debit(40000);
    
}catch(err){
    console.log(err);
}finally{
    console.log("Transactions are complete");
} */
let acc = new Account(5000);
try {
    //contains the code that could raise an exception......    
    console.log("The balance is " + acc.getBalance());
    acc.credit(5000);
    acc.debit(4000);
    acc = new SBAccount(acc.getBalance());//base type instantiated to the derived...
    acc.credit(45000);//method overriding.....
    (<SBAccount>acc).calculateInterest();//type assertions are similar to type casting that U see in other OOP. The reason its called Type Assertion is that casting generally implies some sort of runtime support like RTTI(Runtime type information) which Typescript does not have. So Type Assertions are purely a compile time constructs and a way to provide info the the compiler on the way U want UR object to be used....
    console.log(acc.getBalance());
      
} catch (err) {
    console.log(err);
} finally {
    console.log("Transactions are complete");
}
/* let sbAcc = new SBAcount(5000);
sbAcc.credit(5000);
sbAcc.calculateInterest();
console.log(sbAcc.getBalance()); */

//console.log("The balance is " + acc.getBalance());
/*
Method overriding is a feature where a base class method can be modified in the derived class.
In this case, the derived version should have the same signature as the base version. 
The signature includes the name of the method, arg list of the method as well as the return type of the method. 
Runtime polymorphism is achieved thro method overriding. 
The base class type is instantiated to the dervied type and these features can be experienced. 
The base type will not expose any new methods of the derived while this kind of engagement is provided in the code...
Type assertions are done in this case to the same object to get the new methods of the derived class. 
Type assertions are possible only if the compiler understands that they are of the same type and can be substituted by its derived objects. 
*/
