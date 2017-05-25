var React = require('react');
var ReactDOM = require('react-dom');

var SearchBar = require('./SearchBar');
var ProductTable = require('./ProductTable');

class FilterableProductTable extends React.Component {
	render() {
		return (
			<div>
				<SearchBar />
				<ProductTable products={this.props.products}/>
			</div>
		);
	}
}

module.exports = FilterableProductTable;