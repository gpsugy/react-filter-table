var React = require('react');
var ReactDOM = require('react-dom');

class ProductTable extends React.Component {
	render() {
		return (
			<div>
				<h2>{this.props.products[0].name}</h2>
			</div>
		);
	}
}

module.exports = ProductTable;