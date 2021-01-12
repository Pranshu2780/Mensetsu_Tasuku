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
      <ItemsList />
   </Provider>, 
   document.querySelector('#root')
);
