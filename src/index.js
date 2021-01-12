import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './Components/App'
import ItemsList from './Components/ItemsList';

ReactDom.render(

    <Provider store= {createStore(reducers)}>
      <App />
      <hr/>
      <div style={{
      //  color: '#0095FF',
       paddingTop:'1rem',
       cursor: 'pointer',
       backgroundColor:'pink',
       fontWeight: 'bold',
       fontSize: '1rem',
       animationName:'Stem',
       animationDuration :'5s',
       borderBottom: '1px solid red',
       boxShadow:' 0 2px 4px 2px gray',
      '@keyframes Stem':{
        'from' : {left:'0px' },
        'to' : {left:'10px'}
       }
       }} >
          
      <ItemsList /></div>
      
   </Provider>, 
   document.querySelector('#root')
);
