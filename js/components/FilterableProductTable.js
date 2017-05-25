var React = require('react');
var ReactDOM = require('react-dom');

var SearchBar = require('./SearchBar');
var ProductTable = require('./ProductTable');

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		};
	}

	render() {
		return (
			<div>
				<SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
				<ProductTable products={this.props.products}
					filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
			</div>
		);
	}
}

module.exports = FilterableProductTable;