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
//Abstract classes are classes that are having atleast one abstract method. A method which contains only signature with no implementation is called as abstract methodss. Abstract classes are designed for scenarios where there is a partial implementations and derived classes could implement the rest of the Class structure. The functions would be not clear and the sub classes would provide specific implementations of those functions.  As abstract classes are incomplete(one or more methods are not implemented), they cannot be instantiated. They are instantiated to their derived classes and consumed. Derived classes must implement all the abstract methods of its base class. Else even the derived class should be marked as abstract class. 
var BaseAccount = /** @class */ (function () {
    function BaseAccount(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    BaseAccount.prototype.credit = function (amount) {
        this.balance += amount;
    };
    BaseAccount.prototype.debit = function (amount) {
        if (amount > this.balance)
            throw ("Insufficient Funds");
        this.balance -= amount;
    };
    return BaseAccount;
}());
var SBAccount = /** @class */ (function (_super) {
    __extends(SBAccount, _super);
    function SBAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SBAccount.prototype.calculateInterest = function () {
        var interest = this.balance * 0.07 * 1 / 12;
        this.balance += interest;
        return this.balance;
    };
    return SBAccount;
}(BaseAccount));
var acc; //variable of the type BaseAccount;
acc = new SBAccount(111, 'Phaniraj', 6000);
acc.credit(2346);
acc.debit(2344);
console.log("The Balance after the interest calculation is " + acc.calculateInterest());
