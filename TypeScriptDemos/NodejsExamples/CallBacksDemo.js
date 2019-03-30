//Create a file in the NodejsExamples called CallBackDemo.js...
// function add(f, s){
//     return f + s;
// }

// function restAddFunc(f, s, func){
//     const res = add(f, s);
//     setTimeout(() => {
//         func(res);//get the result after the timeout interval is completed...
//     }, 4000);
// }


// /* const res = add(4,3);
// console.log(res); */

// console.log("Trying to add the values")
// restAddFunc(3, 2, (res)=> console.log("Result : " + res));
// console.log("Got the values")
/////////////////////////////////using promise//////////////////////////////////////////////////
// let happy = false;

// let willGetProject = new Promise((res, rej) =>{
//     if(happy){
//         var project ={ 'name' : "World Bank Project", "cost" : "75 Mn $"};
//         res(project);
//     }else{
//         let err  = "Insufficient resources";
//         rej(err);//throw err..
//     }
// })

// let showOff = function(project){
//     let msg = "We have got the project from " + project.name;
//     return new Promise((res)=>{
//         res({"msg": msg, "proj" : project});
//     });
// }
// //This function is going to be invoked if I get the project.....
// let willWork = function(msg){
//     console.log(msg.msg);
//     //let willWorkmsg  = "I just got a project " + msg.proj.name +" costing " + msg.proj.cost;
//     //willWorkmsg += "\nWow!!! I got work and will work....";
//     //return new Promise((res) => res(willWorkmsg));
//     console.log("I just got a project " + msg.proj.name + " costing " + msg.proj.cost);
// }

// var callClient = function(){
//     willGetProject.then(showOff).then(willWork).then(()=>console.log("After working is done")).catch((errMsg)=>console.log(errMsg)) 
//    /* first case.........  
//    willGetProject.then((pro)=>{
//         console.log(pro.name +" is got!!!!");
//     }).catch((reason)=>console.log(reason)); */
// }
// console.log("I am waiting...")
// callClient();
///////////////////////////////Using Async and Await////////////////////////////////
//This is new from ES7. The word async before a function means that the function returns a promise object. The Implementing function can give any data as the result of the resolver...
// async function simpleFunc(){
//     let data = { "id": 1, "name": "Phaniraj" };
//     const promise = new Promise((res, rej)=>{
//         setTimeout(() => {
//             res(data)
//         }, 4000);
//     })
//     let value = await promise;
//     console.log(value);
// //    return info; //Makes the function wait till the data is obtained and then return it...
//    //return {"id" : 1, "name":"Phaniraj"};
//    //return Promise.resolve();//same as the above statement if values are set...
// }
// //await statement makes the JS wait till the promise settles or data is obtained. Finally U could return the result. This await will not hamper the CPU resources and the Engine could do other jobs meanwhile: execute other scripts, handle other events....
// //await must be used only in asnyc functions.
// function read(res){
//     console.log(res);
//     console.log("The name is " + res.name +" with ID " + res.id)
// }

// //simpleFunc().then(read).then(()=>console.log("All are completed"));
// simpleFunc().then(()=>console.log("All is completed"));
/////////////////////Reconverting willgetProjectExample thro async////////////////////////
const willGetProject = async function(){
    let details = { "name": "WorldBank Project", "cost": "75Mn $" };
    return details;
}

async function showOff(data){
    console.log(data);
    let mgs ="Hey Press!!!\nWe got a project from " + data.name;
    mgs += "\nit costs " + data.cost;
    return mgs;
}

async function willWork(msg){
    console.log(msg);
    console.log("Will start working on this from tomorow from our Bangalore office");
}

//willGetProject(showOff).then(willWork).then(()=>console.log("Completed and deploying in Seatle"));
//function to invoke all the operations using await only....
async function callClient(){
    console.log("Waiting for the project....");
    let firstStep = await willGetProject();
    let secondStep = await showOff(firstStep);
    let lastStep = await willWork(secondStep);
    console.log("Completed and deployed in seatle");
}

(async ()=>{
   await callClient();
})();




