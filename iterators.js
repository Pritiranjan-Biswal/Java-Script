const greetings="Hello World";
for(const greet of greetings) {
    // console.log(`Each char is  ${greet}`);
    
}

const map= new Map()
map.set('IN', "India");
map.set('PAK', "Pakistan");
map.set('SL', "Sri Lanka");

//console.log(map);

for(const [key, value] of map) {
    // console.log(key, ':-',value);
    
}

const myObject ={
    game1:"PUBG",
    game2:"Free Fire"
}
console.log(myObject);


for (const [key, value] of myObject) {
    console.log(key, value);
    
}
