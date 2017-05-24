var React = require('react');
var ReactDOM = require('react-dom');

var SearchBar = require('./SearchBar');

class ProductTable extends React.Component {
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

module.exports = ProductTable;