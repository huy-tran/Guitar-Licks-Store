var AppStore = require('../stores/AppStore');

var StoreWatchMixin = function (callback) {
  return {
    getInitialState: function(){
      return callback(this);
    },
    componentDidMount: function(){
      AppStore.addChangeListener(this.update);
    },
    componentWillUnmount: function(){
      AppStore.removeChangeListener(this.update);
    },
    update: function(){
      this.setState(callback(this));
    }
  }
};

module.exports = StoreWatchMixin;