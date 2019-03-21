//Nodejs is a framework for performing server side coding in JS. It provides features to perform IO operations in UR JS Applications. Running JS Apps out of browser is what is the main feature of NodejS Applications. With this, we could use nodejs for all kinds of applications like creating server apps, handling server requests, adhoc web servers, IoT based Applications.
//Most of the Frameworks that need a server for its management like Angular, Protractor, knockout or any JS Environments, use internally nodejs as their hosting environment.  
var module = require('./cartModule');
var basket = module.shoppingCart;
basket.addItem({"id":124, "name":"samsung note 5", "price" : 45000, "quantity": 2});
basket.addItem({"id":125, "name":"Mi note 5", "price" : 15000, "quantity": 2});
basket.addItem({"id":123, "name":"samsung GURU", "price" : 4000, "quantity": 1});
var billAmount =0.0;
var cart = basket.getCart();
for(let i =0; i < cart.length; i++)
    billAmount += cart[i].price * cart[i].quantity;
console.log("The total bill: " + billAmount);
console.log("The Product was developed as " + module.title);
console.log("The Product was developed by" + module.developedBy);
console.log("The Product was developed on" + module.developedDate);
basket.modify({ "id": 123, "name": "samsung GURU", "price": 3000, "quantity": 1 })

var billAmount =0.0;
var cart = basket.getCart();
for(let i =0; i < cart.length; i++)
    billAmount += cart[i].price * cart[i].quantity;
console.log("The total bill: " + billAmount);
/* //console.log(basket);/* 
console.log("Test 213");

function addFunc(first, second) {
    return first + second;
}

console.log(addFunc(123, 234));
  */