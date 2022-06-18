import React from "react";
const GrocerInput=({handleAdd})=>{
    const [grocery,setGrocery]=React.useState('');

    return (
        <div>y} onChange={(event)=>setGrocery(event.target.value)}/>
            <button onClick={()=>{handleAdd(g
            <input type="text" value={grocerrocery); setGrocery("");}}>Add</button>
        </div>
    )
}

export default GrocerInput;