const initialState = {
    coffees: [
        { id: 1, name: "Cappuccino", description: "description of Cappuccino's coffee "},
        { id: 2, name: "Espresso", description: "description of Espresso's coffee "},
        { id: 3, name: "Iced coffee", description: "description of Iced coffee's coffee " },
        { id: 4, name: "Cheesecake", description: "description of Cheesecake's coffee " }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_coffee":
            return { ...state, coffees: [...state.coffees, action.payload] };

        case "Update_coffee":
            const updatedCoffees = state.coffees.map(coffee => {
                if (coffee.id === parseInt(action.payload.id)) {
                    return {
                        ...coffee,
                        name: action.payload.name,
                        description: action.payload.description,
                    
                    };
                }
                return coffee;
            });
            return { ...state, coffees: updatedCoffees };

        case "Delete_coffee":
            return { ...state, coffees:[...state.coffees.filter((u) => u.id !== parseInt(action.payload)) ] };

        default:
            return state;
    }
};

export default reducer;
