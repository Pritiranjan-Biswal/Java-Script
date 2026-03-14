// const p=document.getElementsByTagName('h1');

// for(let i=0; i<p.length; i++) {
//     if(i%2 != 0) {
//         p[i].innerText="I am a Student";
//         p[i].style.backgroundColor="green"
        
//     }
// }

// console.log("hello world");
// console.log("hello world");
// console.log("hello kun");
// console.log("hello world");
// console.log("hello world");
// console.log("hello kun");
// console.log("hello world");
// console.log("hello world");
// console.log("hello kun");



// let a= document.querySelector('h1');
// a.style.color="red";
// a.style.backgroundColor="pink";
// //console.dir(a);

// let p=document.querySelector('p');
// p.addEventListener('click', () => {
//     if(p.style.color=="red") {
    
//         p.style.color="black";
//     }
//     else {
//         p.style.color="red";
//     }
// })

let btn=document.querySelector('button');
btn.style.color="green";
btn. addEventListener('click', () => {
    let heading =document.createElement('h1');
    heading.textContent="Anveshana-2026";
    let para=document.createElement('p');
    para.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum? Recusanda Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum? Recusandae veniam laudantium sunt, neque iure possimus libero nihil, velit soluta blanditiis alias dolorem fuga molestiae a adipisci magnam nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum? Recusandae veniam laudantium sunt, neque iure possimus libero nihil, velit soluta blanditiis alias dolorem fuga molestiae a adipisci magnam nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum? Recusandae veniam laudantium sunt, neque iure possimus libero nihil, velit soluta blanditiis alias dolorem fuga molestiae a adipisci magnam nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum? Recusandae veniam laudantium sunt, neque iure possimus libero nihil, velit soluta blanditiis alias dolorem fuga molestiae a adipisci magnam nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum? Recusandae veniam laudantium sunt, neque iure possimus libero nihil, velit soluta blanditiis alias dolorem fuga molestiae a adipisci magnam nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum? Recusandae veniam laudantium sunt, neque iure possimus libero nihil, velit soluta blanditiis alias dolorem fuga molestiae a adipisci magnam nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum? Recusandae veniam laudantium sunt, neque iure possimus libero nihil, velit soluta blanditiis alias dolorem fuga molestiae a adipisci magnam nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum? Recusandae veniam laudantium sunt, neque iure possimus libero nihil, velit soluta blanditiis alias dolorem fuga molestiae a adipisci magnam nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum? Recusandae veniam laudantium sunt, neque iure possimus libero nihil, velit soluta blanditiis alias dolorem fuga molestiae a adipisci magnam nemoLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illum? Recusandae veniam laudantium sunt, neque iure possimus libero nihil, velit soluta blanditiis alias dolorem fuga molestiae a adipisci magnam nemo";
    let img=document.createElement('img');
    img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQSeQZ7SYbBkY4plUyVVQJdRlUBTgO3EsIQ&s")
    let div=document.querySelector('div');
    div.appendChild(heading);
    div.appendChild(img);
    div.appendChild(para);
})

