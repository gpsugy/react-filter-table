var React = require('react');
var ReactDOM = require('react-dom');

class ProductCategoryRow extends React.Component {
	render() {
		return (
			<tr><th colSpan="2">{this.props.category}</th></tr>
		);
	}
}

module.exports = ProductCategoryRow;