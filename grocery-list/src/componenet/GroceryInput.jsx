import React from "react";
const GrocerInput=({handleAdd})=>{
    const [grocery,setGrocery]=React.useState('');

    return (
        <div>
            <input type="text" value={grocery} onChange={(event)=>setGrocery(event.target.value)}/>
            <button onClick={()=>{handleAdd(grocery); setGrocery("");}}>Add</button>
        </div>
    )
}

export default GrocerInput;