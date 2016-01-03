var React = require('react');
var AppActions = require('../../actions/AppActions');

var RemoveFromCart = React.createClass({
  update: function(){
    AppActions.removeItem(this.props.index);
  },
  render: function(){
    return (
      <button className="btn btn-danger" onClick={this.update}>X</button>
    );
  }
});

module.exports = RemoveFromCart;