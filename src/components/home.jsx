var React = require('react');
var History = require('react-router').History;

module.exports = React.createClass({

    mixins: [History],

    getInitialState: function() {
        return {};
    },

    render: function() {

        return (
            <div className="home"></div>
        );
    }
});
