var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var AppStore = require('./AppStore.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Router = require('react-router');
var routes = require('../routes.jsx');
var AppConstants = require('../constants/AppConstants.jsx');

var ActionTypes = AppConstants.ActionTypes;
var RouteStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function() {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getRouter: function() {
    return router;
  },

  redirectHome: function() {
    routes.transitionTo('app');
  }
});

RouteStore.dispatchToken = AppDispatcher.register(function(payload) {
  AppDispatcher.waitFor([
    AppStore.dispatchDetails
  ]);
  var action = payload.action;
  switch(action.type){
    case ActionTypes.LOGIN_RESPONSE:
        if(AppStore.isLoggedIn()){
          router.transitionTo('app');
        }else{
          console.log("error in login");
          routes.transitionTo('app');
        }
        break;

    case ActionTypes.LOGOUT:
          routes.transitionTo('app');
          break;

    default:
      }
    return true;
  });

module.exports = RouteStore;
