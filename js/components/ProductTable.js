var React = require('react');
var ReactDOM = require('react-dom');

var ProductCategoryRow = require('./ProductCategoryRow');
var ProductRow = require('./ProductRow');

function generateRows(products, filterText, inStockOnly) {
	let rows = [];
	let curCategory;
	let prevCategory = null;

	for (let product of products) {
		// filter
		if (product.name.indexOf(filterText) === -1 || (!product.stocked && inStockOnly)) {
			continue;
		}

		// render row
		curCategory = product.category;
		if (prevCategory !== curCategory) {
			rows.push(<ProductCategoryRow key={product.category} category={product.category} />);
		}
		rows.push(<ProductRow key={product.name} name={product.name} price={product.price} stocked={product.stocked} />)
		prevCategory = curCategory;
	}
	return rows;
}

class ProductTable extends React.Component {
	render() {
		return (
			<table className="product-table">
				<thead>
					<tr>
						<td>Name</td>
						<td>Price</td>
					</tr>
				</thead>
				<tbody>
					{generateRows(this.props.products, this.props.filterText, this.props.inStockOnly)}
				</tbody>
			</table>
		);
	}
}

module.exports = ProductTable;