// function addtnos(number1,number2) {
//     let result=number1+number2;
//     return result;
    
// }

// const result=addtnos(5,7);
// console.log("result= ",result);




function userlogin(username) {
    if(username === undefined)
 {
    console.log("please enter a valid name");
    
 }else {
    return `${username} just logged in`;
 }
}

console.log(userlogin("kuna"));