import React, { useEffect, useState } from "react";

function CounterApp(){
    // state manage
    let [count,setCount] = useState(0);
    // use Effect
    useEffect(function(){
        console.log("I will run after every render");
        alert("Hii I am useEffect");

    },[count])
    
    function handleIncrease(){
        setCount(count+1)
    }
        return(
        <div>
            <h1>Counter App</h1>
            <h3>Counter:{count}</h3>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}
export default CounterApp