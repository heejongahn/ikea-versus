import React from 'react';
import ReactDom from 'react-dom';
import Greeting from './components/Greeting';

import 'script!jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
  React.createElement(Greeting),
  document.getElementById('content')
);
