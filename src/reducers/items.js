const items = (state = [], action) => {  // Reducer for adding items
    switch (action.type) {
        case 'ADD_ITEMS':
            return [
                ...state,
                {
                    id: action.id,           // calling previous state and returning updating state
                    text: action.text,
                    completed: false
                }
            ]
        case 'UPDATE_ITEM':
            return state.map(item =>
                item.id === action.id ? { ...item, completed: !item.completed } : item
            )
        default:
            return state       // Default value
    }
}

export default items;