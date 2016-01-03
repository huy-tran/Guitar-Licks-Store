var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change',
    _productsInStore = [],
    _cartItems = [];

for (var i = 1; i < 11; i++) {
  _productsInStore.push({
    id: i,
    cost: i * 10,
    title: "Lick #" + i,
    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, voluptate!",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, alias at consequatur inventore provident natus recusandae ratione tempora, ad fugiat.',
    img: '/src/img/product.png'
  });
}

function _addItem (item) {
  if (!item.inCart) {
    item.quantity = 1;
    item.inCart = true;
    _cartItems.push(item);
  } else {
    _cartItems.forEach(function (cartItem, index) {
      if (cartItem.id === item.id) {
        cartItem.quantity += 1;
      }
    });
  }
}

function _removeItem (index) {
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
}

function _increaseItem (index) {
  _cartItems[index].quantity += 1;
}

function _decreaseItem (index) {
  if (_cartItems[index].quantity > 1) {
    _cartItems[index].quantity -= 1;
  } else {
    _removeItem(index);
  }
}

function _getCartTotal(){
  var quantity = 0, total = 0;
  _cartItems.forEach(function (cartItem, index) {
    quantity += cartItem.quantity;
    total += cartItem.quantity * cartItem.cost;
  });
  return {
    'quantity': quantity,
    'total': total
  };
}

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getProductsInStore: function() {
    return _productsInStore;
  },
  getCartItems: function(){
    return _cartItems;
  },
  getCartTotal: function(){
    return _getCartTotal();
  },
  dispatchIndex: AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
      case AppConstants.ADD_ITEM:
        _addItem(action.item);
        break;
      case AppConstants.REMOVE_ITEM:
        _removeItem(action.index);
        break;
      case AppConstants.INCREASE_ITEM:
        _increaseItem(action.index);
        break;
      case AppConstants.DECREASE_ITEM:
        _decreaseItem(action.index);
        break;
    };
    AppStore.emitChange();
    return true;
  })
});

module.exports = AppStore;