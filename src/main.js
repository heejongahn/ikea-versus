import React from 'react';
import ReactDom from 'react-dom';

import 'script!jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

let AddCardButton = React.createClass({
  render: () => {
    return (
      <span className="glyphicon glyphicon-plus"></span>
    );
  }
});

ReactDom.render(
  React.createElement(AddCardButton),
  document.getElementById('content')
);
