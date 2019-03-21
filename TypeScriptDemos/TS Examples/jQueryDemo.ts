/// <reference path="./node_modules/@types/jquery/JQuery.d.ts"/>

let fruits: string [] = ["Apple","Mango","Orange"];
$.each(fruits, (i, v)=>{
    console.log(v)
});
$(document).ready(()=>alert("Testing jQuery thro TS"));
