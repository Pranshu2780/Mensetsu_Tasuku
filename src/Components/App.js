import React from 'react';
import ReactDom from 'react-dom';
import styles from '../CSS/App.css';
import { SelectText } from '../actions';
import { connect } from 'react-redux';
import Add from '../Containers/Add';
const App=()=>{
  
   
  return <div> {/* Opening of Returning Div */}
     
           <Add/>
          {/* <TextList/> */}
      {/* <button className="History" >History</button> */}
        {/* Closing of Returning Div */}
   </div> 
};

export default App;