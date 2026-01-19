let str="   KUNA";
// console.log(str.length);

// console.log(str.charAt(3));


// console.log(str.slice(-3,-1));

// console.log(str.substring(0,4));


// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.includes("KU"));


// let k="banana";
// // console.log(k.lastIndexOf("n"));


// // console.log(k.replaceAll("a", "b"));


// // let pr="kunabiswal, pritibidwal";
// // console.log(pr.split(","));



// // console.log(k.concat(" is my favourite food."));




// const a = 12345;
// console.log(a.toString());

// const num=123.8900;
// console.log(num.toPrecision(6));


// const num=123.890045;
// console.log(num.toLocaleString('en-IN'));


// let user = {     // an object
//   name: "John",  // by key "name" store value "John"
//   age: 30        // by key "age" store value 30
// };

// get property values of the object:

// user.isAdmin="bisu";

// console.log(user);

// delete user.age;
// console.log(user);

// user.full Name="kuna Biswal";
// user["Full Name"]="kuna biswal";

// console.log(user);
//   let user = {
//     name: "John",
//     age: 30
//   };

//   let key = "name";
//   console.log((user[key]));
  
let key = "age";

let user = {
    
  name: "John",
  [key]: 30
};

console.log(user[key]);

