var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(amount) {
        this.balance = amount;
    }
    Account.prototype.credit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.debit = function (amount) {
        if (this.balance < amount)
            throw "Insufficient funds";
        this.balance -= amount;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
//The derived class must ensure that the base class constructor is called either implicitly or explicitly using super...
var SBAccount = /** @class */ (function (_super) {
    __extends(SBAccount, _super);
    function SBAccount(amount) {
        return _super.call(this, amount) || this;
    }
    SBAccount.prototype.credit = function (amount) {
        console.log("Crediting into SBAccount");
        _super.prototype.credit.call(this, amount);
    };
    SBAccount.prototype.calculateInterest = function () {
        var amount = this.getBalance(); //Base class method which is public and is useable here...
        var interest = amount * 0.065 * 1 / 12;
        this.credit(interest);
    };
    return SBAccount;
}(Account));
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
var acc = new Account(5000);
try {
    //contains the code that could raise an exception......    
    console.log("The balance is " + acc.getBalance());
    acc.credit(5000);
    acc.debit(4000);
    acc = new SBAccount(acc.getBalance());
    acc.credit(45000); //method overriding.....
    acc.calculateInterest();
    console.log(acc.getBalance());
}
catch (err) {
    console.log(err);
}
finally {
    console.log("Transactions are complete");
}
/* let sbAcc = new SBAcount(5000);
sbAcc.credit(5000);
sbAcc.calculateInterest();
console.log(sbAcc.getBalance()); */
//console.log("The balance is " + acc.getBalance());
