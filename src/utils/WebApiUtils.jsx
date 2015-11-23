
var AppConstants = require('../constants/AppConstants.jsx');
var jQuery = require('jquery');

var request = require('superagent');

var APIEndpoints = AppConstants.APIEndpoints;
var AppActions = require('../actions/AppActions.jsx');

module.exports = {
  allProducts: function(){
    console.log("Hi Reached "+APIEndpoints.HOME);
        var result = require('../data.js');
        AppActions = require('../actions/AppActions.jsx');
        AppActions.allProducts(result, null);
  },

  login :function(email, password){
      var access_token = "nvfjahv66r7843%6905";
      AppActions.serverLogin(access_token);
  }
};
