import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCoffeeAction } from "../config/actions";

function AddCoffee(){
    const count = useSelector(data=> data.coffees.length)
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
const handleClick = () =>  {
    dispatch(addCoffeeAction({
        id:count+1,
        name:name,
        description:description
    }))
    navigate('/')
}
return(
  <form>
    <label>Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <label>Description</label>
    <input type="text"value={description} onChange={(e)=>setDescription(e.target.value)}/>
    <button onClick={handleClick}>Add</button>
  </form>
)
}
export default AddCoffee;