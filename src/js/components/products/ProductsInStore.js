var React = require('react');
var AppStore = require('../../stores/AppStore');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var ProductDisplay = require('./ProductDisplay');

function _productsInStore() {
  return { productsInStore: AppStore.getProductsInStore() };
}

var ProductsInStore = React.createClass({
  mixins: [StoreWatchMixin(_productsInStore)],
  render: function(){
    var productsInStore = this.state.productsInStore.map(function (productInStore, i) {
      return (
        <ProductDisplay product={productInStore} key={productInStore.id} />
      )
    });
    return (
      <div className="row">
        {productsInStore}
      </div>
    );
  }
});

module.exports = ProductsInStore;