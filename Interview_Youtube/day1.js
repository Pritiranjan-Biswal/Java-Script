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



// let arr=[1,10,18,14,6]
// function abc(p,...a) {
//     console.log(a);
    
// }
// abc(8,9,10,11)


// const arr=["a", 1, "b",2,"c", 3,"d"]
// let num=[]
// let c=[]
// for(let i=0; i<arr.length; i++) {
//     if(typeof(arr[i])=="string") {
//         c.push(arr[i])
//     }
//     else {
//         num.push(arr[i]);
//     }
// }
// console.log(c);
// console.log(num);

// let a=2;
// let b=3;


// a=a+b;
// b=a-b;
// a=a-b;

// console.log(a);
// console.log(b);

// let a1=[1,2,3,4,5]
// let a2=[3,4,5,6,7]

// let  result=a1.filter(item => a2.includes(item));

// console.log(result);


let arr=[1,2,3,4,5]

let mul=arr.reduce(function (a, element)  {
    
    return element*a;
},1)
console.log(mul);

