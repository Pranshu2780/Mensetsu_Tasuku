import React from 'react';
import ReactDom from 'react-dom';
import styles from '../CSS/App.css';
import { SelectText } from '../actions';
import { connect } from 'react-redux';
import TextList from './TextList';

const App=()=>{
  
   
  return <div> {/* Opening of Returning Div */}
     
      <div className="input">  {/* opening of Input Div */}
      
         <label className="label"> Enter the Text :
             <input className="text" 
             />
         </label>
      
         <button className="btn" >Submit</button>
      
        
      </div>  {/* Closing of Input Div*/}

          <TextList/>
      {/* <button className="History" >History</button> */}
        {/* Closing of Returning Div */}
   </div> 
};

export default App;