import React from "react";
const GroceryList = ({data,handleDelete}) =>{
    return (
        <div>
            {
                data.map((item)=>(<div className='grocery-item' key={item.id}><h1 >{item.grocery}</h1>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </div>))
            }
        </div>
    )
}

export default GroceryList;