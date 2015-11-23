var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var AppConstants = require('../constants/AppConstants.jsx');
var WebAPIUtils = require('../utils/WebApiUtils.jsx');

var ActionTypes = AppConstants.ActionTypes;

var Actions = {

  allProducts: function(json){
    AppDispatcher.handleViewAction({
      type:ActionTypes.PRODUCT_LIST,
      json : json
    });
  },

  getProducts: function(){
      AppDispatcher.handleViewAction({
        type:ActionTypes.GET_PRODUCTS
      });
      WebAPIUtils.allProducts();
  },

serverLogin: function(access_token){
    AppDispatcher.handleServerAction({
      type:ActionTypes.LOGIN_RESPONSE,
      access_token: access_token
    })
  },

  logout: function(){
    AppDispatcher.handleViewAction({
      type:ActionTypes.LOGOUT
    })
  }
};
console.log(typeof Actions.allProducts);
 module.exports = Actions;
