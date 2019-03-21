/// <reference path="./node_modules/@types/jquery/JQuery.d.ts"/>
var fruits = ["Apple", "Mango", "Orange"];
$.each(fruits, function (i, v) {
    console.log(v);
});
$(document).ready(function () { return alert("Testing jQuery thro TS"); });
