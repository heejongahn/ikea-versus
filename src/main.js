import React from 'react';
import ReactDom from 'react-dom';
import Greeting from './components/Greeting';

ReactDom.render(
  React.createElement(Greeting, null),
  document.getElementById('content')
);
