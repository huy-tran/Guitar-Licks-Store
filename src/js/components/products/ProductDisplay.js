var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/AppStore');
var AddToCart = require('../cart/AddToCart');

var ProductDisplay = React.createClass({
  render: function(){
    var product = this.props.product;
    return (
      <div className="col-sm-3 product">
        <h2>{product.title}</h2>
        <img src={product.img} />
        <p>{product.summary}</p>
        <h4>
          ${product.cost} <span className="text-success">{product.inCart && '(' + product.quantity + ' in Cart)'}</span>
        </h4>
        <div className="btn-group">
          <Link href={ "/product/" + product.id } className="btn btn-info">More Details</Link>
          <AddToCart item={product} />
        </div>
      </div>
    );
  }
});

module.exports = ProductDisplay;