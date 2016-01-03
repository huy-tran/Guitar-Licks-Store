var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/AppStore');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var IncreaseItem = require('./IncreaseItem');
var DecreaseItem = require('./DecreaseItem');
var RemoveFromCart = require('./RemoveFromCart');

function _cartItems() {
  return { items: AppStore.getCartItems() };
}

var Cart = React.createClass({
  mixins: [StoreWatchMixin(_cartItems)],
  render: function(){
    var total = 0;
    var items = this.state.items.map(function (item, i) {
      var subtotal = item.quantity * item.cost;
      total += subtotal;
      return (
        <tr key={i}>
          <td><RemoveFromCart index={i}/></td>
          <td>{item.quantity}</td>
          <td>{item.cost}</td>
          <td>
            <div className="btn-group">
              <IncreaseItem index={i}/>
              <DecreaseItem index={i}/>
            </div>
          </td>
          <td>${subtotal}</td>
        </tr>
      )
    });
    return (
      <div className="well">
        <table className="table table-hover">
          <thead>
            <tr>
              <td></td>
              <td>Quantity</td>
              <td>Cost</td>
              <td></td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-right">Total</td>
              <td>${total}</td>
            </tr>
          </tfoot>
        </table>
        <Link href="/">Back to Store</Link>
      </div>
    );
  }
});

module.exports = Cart;