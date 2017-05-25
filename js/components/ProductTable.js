var React = require('react');
var ReactDOM = require('react-dom');

var ProductCategoryRow = require('./ProductCategoryRow');
var ProductRow = require('./ProductRow');

function generateRows(data) {
	let rows = [];
	let curCategory;
	let prevCategory = null;
	for (let row of data) {
		curCategory = row.category;
		if (prevCategory !== curCategory) {
			rows.push(<ProductCategoryRow key={row.category} category={row.category} />);
		}
		rows.push(<ProductRow key={row.name} name={row.name} price={row.price} stocked={row.stocked} />)
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
					{generateRows(this.props.products)}
				</tbody>
			</table>
		);
	}
}

module.exports = ProductTable;