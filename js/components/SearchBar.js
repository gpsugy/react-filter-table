var React = require('react');
var ReactDOM = require('react-dom');

class SearchBar extends React.Component {
	render() {
		return (
			<form>
				<input className="search-input" type="text" placeholder="Search..." value={this.props.filterText}/>
				<div className="checkbox-container">
					<input className="checkbox" type="checkbox" checked={this.props.inStockOnly} /><span> Only show products in stock</span>
				</div>
			</form>
		);
	}
}

module.exports = SearchBar;