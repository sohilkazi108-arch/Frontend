import React from "react";

// function Card(props){
//     return(
//         <div>
//             <img src={props.img} alt="" />
//             <h4>{props.name}</h4>
//             <h5>{props.price}</h5>
//             <p>{props.description}</p>
//         </div>
//     )
// }.

function Card({img,name,price,description}){
    return(
        <div>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>{price}</h5>
            <p>{description}</p>
        </div>
        
    )
}

export default Card;