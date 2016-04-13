import React from 'react';
import ReactDom from 'react-dom';
import Greeting from './components/Greeting';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
  React.createElement(Greeting, null),
  document.getElementById('content')
);
