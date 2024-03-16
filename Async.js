// js callback
// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

// function myDisplayer(sum){
//     document.getElementById('demo').innerHTML= sum;
// }
// function myCalculator(a,b, myCallback){
//     let sum = a + b;
//     myCallback(sum)
// }
// myCalculator(5,5, myDisplayer)

// asynchronous js
// functions running in parallel with other functions

// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
//}

// javascript promise 
// A promise is an  object that links producing code and consuming code
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );

//   


//async await
// async makes a function return a Promise

// await makes a function wait for a Promise
async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "https://chat.openai.com");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  getFile();
