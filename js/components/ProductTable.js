var React = require('react');
var ReactDOM = require('react-dom');

var ProductCategoryRow = require('./ProductCategoryRow');

//function generateRows(data) {
//	let rows;
//	let curCategory;
//	for (let row of data) {
//		curCategory = row.category;
//		rows += <tr>
//	}
//}

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
			</table>
		);
	}
}

module.exports = ProductTable;