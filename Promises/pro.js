// const promiseOne= new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Asyns is Completed");
//         resolve()
//     },1000)
// })


// promiseOne.then(function() {
//     console.log("Promise consumed");
    
// })

// let  firstPromise= new Promise((resolve, reject) => {
//     setTimeout(function sayMyname() {
//     console.log("Kuna Biswal");
//     },1000);

// })
 


// let promise1=new Promise((resolve, reject) => {
//     let success=false;
//     if(success) {
//         resolve("Promise Fulfilled");
//     }
//     else {
//         reject("Promise Rejected");
//     }
// });



// promise1.then((messagge) => {
//     console.log("Yes");
// }).catch((error)=> {
//     console.log("no");
    
// })  

let promise = new Promise((resolve, reject) => {
    let success = true;

    if(success) {
        resolve("Success");
    } else {
        reject("Error");
    }
});
promise
  .then((data) => {
      console.log(data);
  })
  .catch((error) => {
      console.log(error);
  });

