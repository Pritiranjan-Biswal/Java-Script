// let myDate=new Date;
// console.log(myDate);

const myArr=[1,2,3,4];
// myArr.push(7);
// myArr.pop()
// myArr.unshift(-1)
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(6));

// console.log(myArr.indexOf(3));


// const newArr=myArr.join()
// console.log(newArr);
// console.log(typeof(newArr));
// let newArr=myArr.splice(0,2);
// console.log(newArr);
// console.log(myArr);

const marvel_heros=["thor", "iron man", "spiderman"]
const dc_heros=["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


const all_heros=[...marvel_heros,...dc_heros]
console.log(all_heros);
