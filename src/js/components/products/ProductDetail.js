var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/AppStore');
var AddToCart = require('../cart/AddToCart');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');

function _getProductDetail (component) {
  var thisItem;
  AppStore.getProductsInStore().forEach(function (productInStore, index) {
    if (productInStore.id.toString() === component.props.product) {
      thisItem = productInStore;
    }
  });
  return { product: thisItem} ;
}

var ProductDetail = React.createClass({
  mixins: [StoreWatchMixin(_getProductDetail)],
  render: function(){
    var product = this.state.product;
    return (
      <div className="row">
        <h2>{product.title}</h2>
        <img src={product.img} />
        <p>{product.description}</p>
        <h4>
          ${product.cost} <span className="text-success">{product.inCart && '(' + product.quantity + ' in Cart)'}</span>
        </h4>
        <AddToCart item={product} />
        <br />
        <Link href="/">Back To Store</Link>
      </div>
    );
  }
});

module.exports = ProductDetail;