var React = require('react');

var Router = require('react-router');
var History = Router.History;

require('!style!css!sass!../stylesheets/page.scss');

module.exports = React.createClass({

    mixins: [History],

    propTypes: {},

    getInitialState: function() {
        return {};
    },

    render: function() {

        return (
            <div className="page">Sub Page.</div>
        );
    }
});
