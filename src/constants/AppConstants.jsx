var keyMirror = require('keymirror');

var APIRoot = "http://mensroom.co/";


module.exports = {

  APIEndpoints: {
    HOME : APIRoot + "app/api/home/",
    FEATURED : APIRoot + "app/api/featured/"
  },

  PayloadSources : keyMirror({
    VIEW_ACTION: null,
    SERVER_ACTION: null,
  }),

  ActionTypes: keyMirror({
    HOMEPAGE : null,
    LOGIN_REQUEST : null,
    PRODUCT_LIST :null,
    LOGOUT: null,
    LOGIN_RESPONSE: null,
    GET_PRODUCTS: null
  }),

};
