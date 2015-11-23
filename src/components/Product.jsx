var React = require('react');
var RouterStore = ('../stores/RouterStore.js');
var AppActions = ('../actions/AppActions.js');

var Product = React.createClass({
  handleClick:function(){
    AppActions.logout();
  },
  render:function(){
    var el = this.props.data.map(function(product){
      return(
      <div key={product.product_id}>
      <img src={product.image} alt="random images" />
        <h1>{product.name}</h1>
      </div>
      );
    });
    return(
      <div>
        {el}
      </div>
    );
  }
});

module.exports = Product;
