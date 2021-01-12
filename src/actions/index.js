let inc = 0;

export const SelectText = item => ({
    type: 'ADD_ITEMS',
    id: inc++,
    text: item.text
});

export const updateItem = id => ({
    type: 'UPDATE_ITEM',
    id
});