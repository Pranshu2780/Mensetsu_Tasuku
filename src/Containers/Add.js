import React from 'react';
import ReactDom from 'react-dom';
import styles from '../CSS/App.css';
import { SelectText } from '../actions';
import { connect } from 'react-redux';
// import TextList from './TextList';

const Add=({qty, dispatch})=>{
  
   let input,item;
   const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) { return }
    item = {
        text: input.value
    }
    dispatch(SelectText(item));
    input.value = '';
};

  return (
   
    <div> {/* Opening of Returning Div */}
        <form className="sub" onSubmit={handleSubmit}>  
                Enter the Text :
          <input className="text"  type="text" ref={el=>(input=el)}  />
          <input className="inp"type="submit" value="Submit" />
     
         {/* </div>  Closing of Input Div */}
        </form>
         
        {/* Closing of Returning Div */}
   </div> 
  )
};

export default connect()(Add);