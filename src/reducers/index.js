import { combineReducers } from 'redux';

const TextReducer = () =>{
  return[
      {
          title:'Milind'
      },
      {
          title:'Pandey'
      }
  ];
};

const SelectedTextReducer = (SelectedText=null,action) =>{
  if(action.type ==='TEXT'){
      return action.payload;
  }

  return SelectedText;
};

export default combineReducers({
    display : SelectedTextReducer,
    text : TextReducer  
});