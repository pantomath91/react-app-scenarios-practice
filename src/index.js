import React from 'react';
import ReactDOM from 'react-dom';
import ReactScenarios from './youtubeReactInterview/reactScenarios'
import reportWebVitals from './reportWebVitals';
import Rahul from './HOC/Rahul';

ReactDOM.render(
  <React.StrictMode>
    <ReactScenarios />
    <Rahul camp="120"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
