export const addCoffeeAction = (coffee) =>{
    return {type:"Add_coffee" , payload:coffee}
}
export const updateCoffeeAction = (newcoffee) =>{
    return {type:"Update_coffee" , payload:newcoffee}
}
export const deleteCoffeeAction = (id) =>{
    return {type:"Delete_coffee" , payload:id}
}