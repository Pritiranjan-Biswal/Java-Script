// let name="kuna";


// function showMessage() {
    
//     name='lipi';
//     console.log("hi "+ name);
  
// }

// console.log('hi '+name);
// showMessage();
// console.log('hi '+name);


// function name(from, text) {
//     console.log(from+ ": "+text);
    
// }
// name('Kuna', 'Hi');

// function showMessage(from, text) {

//   from = '*' + from + '*'; // make "from" look nicer

//   console.log( from + ': ' + text );
// }

// let from = "Ann";

// showMessage(from, "Hello"); // *Ann*: Hello

// // the value of "from" is the same, the function modified a local copy
// console.log( from ); // Ann


// function name(n,m="muna") {
//     console.log(n+" "+m);
    
// }
// name('kuna', undefined);




// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }
// if( isPrime(3)) {
//     console.log("yes");
    
// }
// else {
//     console.log("no");
    
// }


// function min(a, b) {
//   return a < b ? a : b;
// }
// if(min(40,5)) {
    
// }

// let sum=(a,b) => a+b;

// console.log(sum(1,3));


// let sayHi= () =>console.log("Hello");

// sayHi();


// function fn()  {
//   console.log("Hello");
  
// }
// function fn2(ok) {
//   ok
//   console.log("hello kuna");
  

// }

// fn2(fn);

let scores = [12, 55, 70];

scores.forEach((score, index, array) => {
  console.log(array);
});