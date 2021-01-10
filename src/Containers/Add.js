import React from 'react';
import ReactDom from 'react-dom';
import styles from '../CSS/App.css';
import { SelectText } from '../actions';
import { connect } from 'react-redux';
// import TextList from './TextList';

const Add=({dispatch})=>{
  
   let input;

  return <div> {/* Opening of Returning Div */}
     
      
      
      <form>
        onSubmit = {
            e=>{
                  e.preventDefault();

                  if(!input.value.trim()){
                      return
                  }

                  dispatch(SelectText(input.value));
                  input.value='';
            }
        } 
    
      <div className="input">  {/* opening of Input Div */}
      <label className="label"> Enter the Text :
             <input className="text"  type="text" ref={el=>(input=el)}
             />
     </label>
      
         <button className="btn" type="submit">Submit</button>
      
         </div>  {/* Closing of Input Div*/}
     
      </form>
         
        
   

    
      {/* <button className="History" >History</button> */}
        {/* Closing of Returning Div */}
   </div> 
};

export default connect(SelectText)(Add);