var React = require('react');
var ReactDOM = require('react-dom');

class ProductTable extends React.Component {
	render() {
		return (
			<article className="product-table">
				<div>
					<h1>Name</h1><h1>Price</h1>
				</div>
			</article>
		);
	}
}

module.exports = ProductTable;