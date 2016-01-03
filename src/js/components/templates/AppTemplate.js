var React = require('react');
var Header = require('../header/Header');

var AppTemplate = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
});

module.exports = AppTemplate;