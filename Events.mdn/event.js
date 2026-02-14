// // const btn = document.querySelector("button");

// // function random(number) {
// //   return Math.floor(Math.random() * (number + 1));
// // }

// // btn.addEventListener("click", () => {
// //   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
// //   document.body.style.backgroundColor = rndCol;
// // });

// const kuna=document.querySelector('h4');

// // kuna.addEventListener("click", function() {
// //   this.textContent="Kuna Biswal";
// // }, {once:true});




// function changeText() {
//   kuna.textContent="kuna bIswal";
//   kuna.removeEventListener("click", changeText);
// }
// kuna.addEventListener("click", changeText);


const kuna= document.querySelector('#increase');
const muna=document.querySelector('#decrease');
const display=document.querySelector('h4');

const reset=document.querySelector('#reset');
const body=document.querySelector('body');
// console.log(kuna);


// kuna.addEventListener("click", (item) =>{
//   item=item+1;
// })
let count=0;

function updateDisplay() {
  display.textContent=count;
}


function colorDisplay() {
  if (count==0) {
    body.style.backgroundColor="red";
  }
  else if(count==10) {
    body.style.backgroundColor="green";
  }
  else {
    body.style.backgroundColor="black";
  }
}




kuna.addEventListener("click", ()=> {
  count++;
  updateDisplay();
  colorDisplay();

  

  
});





muna.addEventListener("click", () =>{
  if (count>0) {
    count--;
    updateDisplay();
    colorDisplay();
  }
});
reset.addEventListener("click", ()=> {
  count=0;
  updateDisplay();
  colorDisplay();
});


