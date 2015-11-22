var React = require('react');
var ReactDOM = require('react-dom');
var history = require('history').createHistory();

var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;

var Home = require('./home.jsx');


var App = React.createClass({

    propTypes: {
        children: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.element])
    },

    getInitialState: function() {
        return {};
    },

    render: function() {
        return (
            <div className="main">
			    { this.props.children }
		    </div>
        );
    }
});


ReactDOM.render((
    <Router history={history}>
	    <Route path="/" component={App}>
	        <IndexRoute component={Home} />
	    </Route>
	</Router>
), document.getElementById('appContainer'));
