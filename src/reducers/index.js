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

const SelectedTextReducer = (SelectedText=[],action) =>{
  if(action.type ==='TEXT'){
      return [
          ... SelectedText,{
              text: action.text
          }
      ];
  }

  return SelectedText;
};

export default combineReducers({
    text : SelectedTextReducer,
    text1 : TextReducer  
});