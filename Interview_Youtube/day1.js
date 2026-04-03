// let abc="Nausad"
// abc[2]="r"
// console.log(abc);
//Is it changed or not ?
//Ans:- NO, it can't be changed, because Because strings in JavaScript are immutable.


//----------------------------

// let a=100
// let z=a++ //100
// let z=++a   ??101
// console.log(a+z);

//in pre-increament ++a=101 & a++=100
//--------------------------------------

// let str = "My name is Pritiranjan Biswal";

// let words = str.split(" ");
// console.log(words);

// let result = [];

// for (let i = 0; i < words.length; i++) {
//     let rev = "";

//     for (let j = words[i].length - 1; j >= 0; j--) {
//         rev += words[i][j];
//     }

//     result.push(rev);
// }

// console.log(result.join(" "));


//---------------

// let str="Kuna Biswal"
// for(let i=0; i<str.length;i++) {
//     let count=0;
//     for(let j=0; j<str.length(); j++) {
//         if(str[i]==str[j]) {
//             count++;
//         }
//     }
//     console.log(str[i],":-", count);
    
// }



let arr=[1,10,18,14,6]
function abc(p,...a) {
    console.log(a);
    
}
abc(8,9,10,11)