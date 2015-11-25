var React = require('react');

module.exports = React.createClass({

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
