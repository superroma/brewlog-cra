import React from 'react';
import {render} from 'react-dom';
//import App from './App';
import {Routes} from './Routes';

//import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

render(
  <Routes/>,
  document.getElementById('root')
);
