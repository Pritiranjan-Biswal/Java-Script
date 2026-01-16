// let a=1;
// const b=2;
// var c=3;



// if(true) {
//     let a=10;
//     const b=20;
//     var c=30;
// }

// console.log(a);
// console.log(b);
// console.log(c);



// function one() {
//     const username ="kuna"
//     function two() {
//         const website ="youtube"
//         console.log(username);
        
//     }
//     console.log(website);
//     two()
    
// }
// one()


// function addOne(num) {
//     return num+1;
// }


// console.log(addOne(4));


// console.log(x);
// greet();

// var x=10;

// function greet() {
//     console.log("Hello World");
    
// }


// var a=100;
// function test() {
//     console.log(a);
//     a=50;
    
// }


// test();
// console.log(a);


const userform = {
    name:"kuna",
    price:999,
    welcomeMessage: function() {
        console.log(`${this.name}, is my name.`);
        
    }

}
userform.welcomeMessage();
userform.name="priti";
userform.welcomeMessage();