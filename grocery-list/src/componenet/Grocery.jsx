
import React from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import {v4 as uuid} from 'uuid';

const Grocery=()=>{
    const [data, setData]=React.useState([]);

    const handleAdd = (grocery) => {
        const groceryItem = {
            grocery:grocery,
            id: uuid()
        }
        setData([...data, groceryItem])
    }

    const handleDelete=(id)=>{
        const updateData =data.filter((grocery)=>grocery.id !==id);
        setData(updateData);
    }
    return (
        <>
            <GroceryInput handleAdd={handleAdd}/>  
            <GroceryList data={data} handleDelete={handleDelete}/>
        </>
    )

}
export default Grocery;