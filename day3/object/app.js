let obj = {
    name:"sohil",
    age:18,
    favcolor:"white",
    isMale: true,
    location:"delhi",
    fn: function details(){
        console.log(`my name is ${this.name} and age is ${this.age}`)
},
info:{
    address:"new delhi",
    favmovie:"spiderman"
}
}

console.log(obj);
console.log(obj.name);
console.log(obj["favcolor"]);

// update my obj
obj.name ="sohil khazi";
console.log(obj);
// console.log(obj.details());
console.log(obj.fn());

console.log(obj.info.favmovie);