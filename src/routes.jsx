var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var HomePage = require("./components/HomePage.jsx");
var history = require('history/lib/createBrowserHistory');

module.exports = (
  <Router history={history()}>
    <Route name="app" path='/' component={HomePage}/>
  </Router>
);
