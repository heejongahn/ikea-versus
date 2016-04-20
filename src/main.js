import React from 'react';
import ReactDom from 'react-dom';

import 'script!jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.styl'

let AppContainer = React.createClass({
  getInitialState: () => {
    return {items: [<ProductCard />]};
  },
  handleAddCard: function(e) {
    e.preventDefault();
    this.setState({items: this.state.items.concat(<ProductCard />)});
  },
  render: function() {
    let products = [];
    return (
      <div className="container app-container">
        {this.state.items.map(item => item)}
        <AddCardButton handleAddCard={this.handleAddCard}/>
      </div>
    );
  },
});

let ProductCard = React.createClass({
  render: () => {
    return (
      <div className="product-card">
        <h1>Product Card</h1>
      </div>
    )
  }
});

let AddCardButton = React.createClass({
  render: function() {
    return (
      <a className="add-card glyphicon glyphicon-plus" onClick={this.props.handleAddCard}></a>
    );
  }
});

ReactDom.render(
  React.createElement(AppContainer),
  document.getElementById('content')
);
