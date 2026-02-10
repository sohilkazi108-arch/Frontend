// let h1 = document.getElementById("heading");

// console.log(h1);
// h1.style.color = "red";
// h1.style.fontSize = "50px"


// let p = document.getElementsByClassName("para");
// console.log(p);
// p[0].style.color = "blue";
// p[1].style.color = "orange";
// // p.style. = "black";

// let p = document.getElementsByTagName("p");

// console.log(p);

// Query selector()

let h1 = document.querySelector("#heading");
console.log(h1);
h1.style.color = "red";

// let p = document.querySelector(".para");
// console.log(p);

// let p1 = document.querySelector(".para");
// console.log(p1);

// console.log(h1.innerHTML);
// h1.innerHTML = "DOM";

// let div = document.querySelector("div");

// console.log(div.innerHTML);
// div.classList.add("box");
// console.log(div);
// div.classList.remove("box");
// div.classList.toggle("box");

// EVENTS


let btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "aqua";

})

let input = document.querySelector(".inp");

input.addEventListener("input",function(event){
    let currentValue = event.target.value;
    console.log(currentValue);
})

// let input = document.querySelector(".inp");

// inp.addEventListener("input",()=>{
//     document.body.style.backgroundColor = "red";
// })
