import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' 
import configureStore from './store/configureStore'
import './index.css';
import App from './App';

const store=configureStore()

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})


const jsx = (
  <Provider store = {store}>
      <App/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))