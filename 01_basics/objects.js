
// const mysyb=Symbol("key1");
// const  Juser= {
//     "full name":"kuna",
//     age:18
//     [mysyb]="priti",
//     location:"Hyderabad",
//     isLoggedin:false,
//     email:"kuna@gmail.com"

// }

// Juser.email="priti@google.com";

// console.log(Juser["email"]);

// Object.isFrozen(Juser); // true

// Object.isFrozen(Juser); 
// console.log(Object.isFrozen(Juser));


// const User={}

// User.id="123abc"
// User.name="kuna"
// User.sub="Math"


// console.log(User);


// const mine ={
//      fullname : {
//         userfullname :{
//             firstname : "kuna",
//             lastname:"biswal"
//         }
//      }

// }

// console.log(mine.fullname.userfullname.firstname);


// const num1={1:"a", 2:"b"}
// const num2 ={3:"c",4:"d"}

// const num3=Object.assign({}, num1,num2);
// console.log(num3);


const User={}

User.id="123abc"
User.name="kuna"
User.sub="Math"




console.log(Object.keys(User));
console.log(Object.values(User));
console.log(Object.entries(User));
console.log(User.hasOwnProperty("sub"));
