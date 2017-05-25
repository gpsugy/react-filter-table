var React = require('react');
var ReactDOM = require('react-dom');

var SearchBar = require('./SearchBar');
var ProductTable = require('./ProductTable');

class FilterableProductTable extends React.Component {
	render() {
		return (
			<div>
				<SearchBar />
				<ProductTable />
			</div>
		);
	}
}

module.exports = FilterableProductTable;