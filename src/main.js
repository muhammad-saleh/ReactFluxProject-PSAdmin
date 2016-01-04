console.log('inside main.js');
$ = jQuery = require('jquery');
var React = require('react');

var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var DefaultRoute = Router.DefaultRoute;
var routes = require('./routes');

var App = require('./components/app');
var About = require('./components/about/aboutPage');

// ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));

ReactDOM.render((
  <Router>
	  <Route path="/" component={require('./components/app')}>
		  <Route path="authors" component={require('./components/authors/authorPage')} />
		  <Route path="about" component={require('./components/about/aboutPage')} />
	  </Route>
  </Router>
), document.getElementById('app'));
