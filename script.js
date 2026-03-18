let st = document.querySelector('#selectst');
let h1 = document.querySelector("h1");

st.addEventListener("change", () => {
    if (st.value !== "") {
        h1.innerText = "Selected State: " + st.value;
        console.log(st.value);
        
    }
});