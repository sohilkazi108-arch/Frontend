// synchronous  programing

// console.log("line 1");
// console.log("line 2");
// console.log("line 3");

// asynchronous programing

// console.log("line 1");

// setTimeout(function(){
//     console.log("line 2")
// },4000)

// setTimeout(function(){
//     console.log("line 3")
// },2000)

// console.log("line 4");

// setInterval()

// let timer = 0;
// setInterval(function (){
//     timer++;
//     console.log(timer);
//     if(timer == 10){
//         clearInterval(id);
//     }
// },1000)

// async-await funtion
async function dataPrint() {
    let response = await  fetch("https://api.tvmaze.com/singlesearch/shows?q=girls");
    let data = await response.json();
    return data;
    
}
let movieData = dataPrint();
console.log(movieData);


// arrow function

let sum = (a,b)=>{
    return (a+b);

}

console.log(sum(4+2));
