// Action Creator
let inc = 0;

export const SelectText = item => ({  //ActionCreator for adding items      
    type: 'ADD_ITEMS',
    id: inc++,
    text: item.text
});

export const updateItem = id => ({  // ActionCreator for updating items
    type: 'UPDATE_ITEM',
});