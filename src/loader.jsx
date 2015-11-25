var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;
var history = require('history').createHistory();

var Home = require('./components/home.jsx');
var Page = require('./components/page.jsx');
var App = require('./components/app.jsx');

ReactDOM.render((
    <Router history={history}>
	    <Route path="/" component={App}>
	        <IndexRoute component={Home} />
	    </Route>
	    <Route path="/page" component={Page} />
	</Router>
), document.getElementById('appContainer'));
