import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCoffeeAction } from "../config/actions";
function UpdateCoffee(){
    const {id}=useParams()
    const coffee = useSelector(data=> data.coffees.find((u)=>u.id===parseInt(id)))

    const [name,setName]=useState(coffee.name)
    const [description,setDescription]=useState(coffee.description)
    const dispatch = useDispatch()
    const navigate = useNavigate()
const handleClick = () =>  {
    dispatch(updateCoffeeAction({
        id:id,
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
          <button onClick={handleClick}>Enregistrer</button>
        </form>
      )

}
export default UpdateCoffee;