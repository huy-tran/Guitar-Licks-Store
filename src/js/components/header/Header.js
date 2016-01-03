var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/AppStore');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');

function _cartTotal(){
  return AppStore.getCartTotal();
}

var Header = React.createClass({
  mixins: [StoreWatchMixin(_cartTotal)],
  render: function(){
    return (
      <div className="row">
        <div className="col-sm-6">
          <h1>Guitar Licks Store</h1>
        </div>
        <div className="col-sm-2 col-sm-push-3">
          <Link href="/cart" className="btn btn-success">
            Quantity: {this.state.quantity} / Total: ${this.state.total}
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = Header;