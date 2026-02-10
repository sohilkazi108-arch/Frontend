import React, { useState } from "react";

function CounterApp(){
    // let count = 0;
    // logic to increase the count value;

    let [count,setCount] =useState(0);
    function handleDecrement(){
        setCount(count-1);
        console.log(count);
    }
    return(
        <div>
            <h1>Counter App</h1>
            <h3>counter :{count+1000}</h3>
            <button onClick={handleDecrement}>Decrement</button>
            <button>
                
            </button>

        </div>
    )
}

export default CounterApp;