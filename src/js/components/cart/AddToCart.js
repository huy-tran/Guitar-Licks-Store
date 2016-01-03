var React = require('react');
var AppActions = require('../../actions/AppActions');

var AddToCart = React.createClass({
  update: function(){
    AppActions.addItem(this.props.item);
  },
  render: function(){
    return (
      <button className="btn btn-primary" onClick={this.update}>Add To Cart</button>
    );
  }
});

module.exports = AddToCart;