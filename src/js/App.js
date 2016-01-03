var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var ProductsInStore = require('./components/products/ProductsInStore');
var ProductDetail = require('./components/products/ProductDetail');
var AppTemplate = require('./components/templates/AppTemplate');
var Cart = require('./components/cart/Cart');


var App = React.createClass({
  render: function(){
    return (
      <AppTemplate>
        <Locations>
          <Location path="/" handler={ProductsInStore}/>
          <Location path="/cart" handler={Cart}/>
          <Location path="/product/:product" handler={ProductDetail} />
        </Locations>
      </AppTemplate>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('myApp'));

module.exports = App;