var React = require('react');
var AppActions = require('../../actions/AppActions');

var IncreaseItem = React.createClass({
  update: function(){
    AppActions.increaseItem(this.props.index);
  },
  render: function(){
    return (
      <button className="btn btn-info" onClick={this.update}>+</button>
    );
  }
});

module.exports = IncreaseItem;