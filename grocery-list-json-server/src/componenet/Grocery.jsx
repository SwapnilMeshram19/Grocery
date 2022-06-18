
import React from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import {v4 as uuid} from 'uuid';

const Grocery=()=>{
    const [data,setData]=React.useState([]);
    const[loading,setLoading]=React.useState(false);
    const[error,setError]=React.useState(false);

    const getGrocery=()=>{
        setLoading(true);
        fetch("http://localhost:3000/grocery")
        .then((res)=>res.json())
        .then((res)=>{setData(res)})
        .catch((error)=>{setError(true);setData([])})
        .finally(()=>setLoading(false));
    }

    
    React.useEffect(()=>{
        getGrocery();
    },[]);
    


    const handleAdd = (grocery) => {
        const groceryItem = {
            grocery:grocery,
            id: uuid()
        }

        fetch("http://localhost:3000/grocery",{
            method:"POST",
            body:JSON.stringify(groceryItem),
            headers:{
                "content-type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=> {getGrocery()});

    }

    const handleDelete=(id)=>{
        let url="http://localhost:3000/grocery/"+id;
        fetch(url,{
            method:"DELETE"
        }).then((res)=>res.json())
        .then((res)=>{getGrocery()});
        
    }
    return (
        <>
            <GroceryInput handleAdd={handleAdd}/>  


            {
                loading?<h1>loading......</h1>:error?<h1>error.....</h1>:
                data.map((item)=>
                <GroceryList item={item} handleDelete={handleDelete} key={item.id}/>
            )
            }
        </>
    )

}
export default Grocery;