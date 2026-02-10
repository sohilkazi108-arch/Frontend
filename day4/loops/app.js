 // loops

 // for loop
// for(let i = 0;i<10;i++){
//     console.log(i*i);
// }

// for-of
let arr = [2,4,6,8,10];

for(let item of arr){
    console.log(item*2)
}

// for-in
let obj = {
    name : "sohil",
    age:19,
    favcolor:"white",
    location:karnataka
}

for(let item in obj){
    // console.log(obj.item);console.error
    console.log(obj[item]);
    
}
