var React = require('react');
var AppActions = require('../../actions/AppActions');

var DecreaseItem = React.createClass({
  update: function(){
    AppActions.decreaseItem(this.props.index);
  },
  render: function(){
    return (
      <button className="btn btn-info" onClick={this.update}>-</button>
    );
  }
});

module.exports = DecreaseItem;