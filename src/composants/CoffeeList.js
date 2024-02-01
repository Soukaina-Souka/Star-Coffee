
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCoffeeAction } from "../config/actions";function CoffeeList() {
    const coffees = useSelector(state => state.coffees)
    console.log(coffees);
    const dispatch = useDispatch()
    const handleDelete = (id) =>   {
        dispatch(deleteCoffeeAction(id))
    }
    return (
        <div>
            <p>
                <Link to="/add-coffee" >
                    <button>
                        Add Coffee
                    </button>
                </Link>
            </p>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Description</td>

                        <td>Actions</td>

                    </tr>
                </thead>
                <tbody>

                    {coffees.map((coffee, index) => {
                        return (
                            <tr key={index}>
                                <td>{coffee.id}</td>
                                <td>{coffee.name}</td>
                                <td>{coffee.description}</td>
                           
                                <td>
                                <Link to={`/update-coffee/${coffee.id}`} >
                                   <button>Update</button>
                                </Link>
                                    
                                    <button onClick={()=>handleDelete(coffee.id)}>Delete</button>
                                </td>

                            </tr>

                        )
                    })
                    }
                </tbody>
            </table>

        </div>
    )
}
export default CoffeeList;