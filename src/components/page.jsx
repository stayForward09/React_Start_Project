var React = require('react');
var History = require('react-router').History;

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
