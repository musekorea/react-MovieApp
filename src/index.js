import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Moya from './Moya';
import Test from './Test';

ReactDOM.render(
  <React.StrictMode>
    <Moya></Moya>
    <App />
    <Test></Test>
  </React.StrictMode>,
  document.getElementById('root')
);
