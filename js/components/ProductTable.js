var React = require('react');
var ReactDOM = require('react-dom');

var ProductCategoryRow = require('./ProductCategoryRow');

function generateRows(data) {
	let rows = [];
	let curCategory;
	let prevCategory = null;
	for (let row of data) {
		curCategory = row.category;
		if (prevCategory !== curCategory) {
			rows.push(<ProductCategoryRow key={row.category}/>);
		}
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