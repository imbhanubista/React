import React from "react";

const SlotM =(props) =>{
    //let x= props.x;
    //let y=props.y;
    //let z=props.z
//in exchage of above three line of code we can do 
let {x,y,z} = props;
    if ((props.x === props.y) && (props.y === props.z)){
        return(
            <>
<div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is Matching</h1>
                <hr />
            </div>            
            </>
        );
    } else{
        return(
        <>
        <div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is Not Matching</h1>
                <hr />
            </div>      
            </>   
        );   
    }

}

export default SlotM;