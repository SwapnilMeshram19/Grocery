import React from "react";
const GroceryList = ({item,handleDelete}) =>{
    return (
        <div>
                <div className='grocery-item'>
                    <h1 >{item.grocery}</h1>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </div>
            
        </div>
    )
}

export default GroceryList;