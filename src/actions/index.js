//Action Creator

let inc=0;
export const SelectText=item=>{
 return{
    type:'TEXT',
    id: inc++ ,
    text: item.text 
 };
};


export const updateItem = id => ({
   type: 'UPDATE_ITEM',
   id
});