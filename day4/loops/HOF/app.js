// // hof

// // case 1

// function A(B){
//     console.log("i m inside A");
//     B();
// }

// // function B(){
// //     console.log("i m inside B");
// // }

// // A(B);
// // WAY2
// A(function B(){
//     console.log("i am inside B");
// }
// )


// CASE 2

// function A(B){
//      console.log("i m inside A");


//  function B(){
//      console.log("i m inside B");
//  }
//  return B;
// }

// let ans = A();
// console.log(ans());

// array methods

let arr = [2,4,6,8,10,12,14];

// arr.forEach(function(item,index){
    // console.log(item*2)
// 

// map()

// let newArr = arr.map(function(item,index){
//     return(item*2);
// })
// console.log(arr);
// console.log(newArr);

// filter()

arr.filter(function(item,index){
    if(item < 5){
        console.log(item);
        return true;
    }
    else{
        return false
    }
})
console.log(newFilter);
