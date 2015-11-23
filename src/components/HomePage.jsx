var React = require('react');
var Product = require('./Product.jsx');
var AppActions = require('../actions/AppActions.jsx');
var RouterStore = require('../stores/RouterStore.js');
var AppStore = require('../stores/AppStore.jsx');

function getStateFromStores() {
  AppActions.getProducts();
  return {
    productsList : AppStore.productsList()
  };
};

var HomePage = React.createClass({
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function(){
   var data = this.state.productsList;
   console.log(data);
 },

  handleSubmit: function(e){
      AppActions.login('user','user');
  },

  render: function(){
    var home = (<Product data={this.state.productsList} />);
    return (
      <div>
        {home}
      </div>
    );
  }
});

module.exports = HomePage;
