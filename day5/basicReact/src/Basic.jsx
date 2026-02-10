import React from "react";



function Basic(){
    let num = 123564552584588;
    let name ="mushhu";
    let arr = [2,4,5,6,7,8,9];
    let fruits = ["apple","mango","banana"]
    return(
        <div>
           <h1>My number: {num}</h1> 
           <h2>my frnd : {name}</h2>
            <h3>my array is : {arr}</h3>
            <ul>
                {
                    fruits.map(function(fruit,index){
                       return <li key={index}>{fruit}</li>
                    })
                }
            </ul>
        </div>
    )

}

export default Basic