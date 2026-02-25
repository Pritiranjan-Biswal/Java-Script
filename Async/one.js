// async function getData() {
//     setTimeout(function() {
//         console.log("I am a Student");
        
//     },1000);
// }

// getData();
// // console.log("Hello World");



// let name="Pritiranjan Biswal";
// let Redg_no=230301120342;
// let age=20;
// let height=5.8;
// let contact=6370042753;


// let user ={
//     name:"Pritiranjan Biswal",
//     Redg_no:230301120342,
//     age:20,
//     height:5.8,
//     contact:6370042753

// }
// console.log(user.Redg_no);
// console.log(typeof(user));

async function getDAta() {
    let response= await fetch('https://jsonplaceholder.typicode.com/todos/2');
    let data=await response.json()
    console.log(data);
} 
getDAta();
