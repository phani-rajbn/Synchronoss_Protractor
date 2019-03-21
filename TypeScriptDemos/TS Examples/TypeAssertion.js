var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.sound = function () {
        console.log("Mew");
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.sound = function () {
        console.log("Barks");
    };
    Dog.prototype.swim = function () {
        console.log("Swims only in pools");
    };
    return Dog;
}());
;
var cat = new Cat();
cat.sound();
cat = new Dog();
cat.sound();
