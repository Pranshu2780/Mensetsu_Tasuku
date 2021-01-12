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
     
      
      
      <form onSubmit={handleSubmit}>  
      {/* <div className="input">  opening of Input Div */}
      <label className="label"> Enter the Text :</label>
     <input className="text"  type="text" ref={el=>(input=el)}  />
     
     <div className={'div-wrapper'}>
                    <label>&nbsp;</label>
                    <input type="submit" value="Submit" />
                </div>
         {/* <button className="btn" type="submit">Submit</button> */}
      
         {/* </div>  Closing of Input Div */}
     
      </form>
         
        
   

    
      {/* <button className="History" >History</button> */}
        {/* Closing of Returning Div */}
   </div> 
  )
};

export default connect()(Add);