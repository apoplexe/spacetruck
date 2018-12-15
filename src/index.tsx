import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// dom ready condition (lib ? DOMContentLoaded ?)
ReactDOM.render(<App />, document.getElementById('root')); // root shoudn't be null (invariant ?)
