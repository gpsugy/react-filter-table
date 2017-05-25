var React = require('react');
var ReactDOM = require('react-dom');

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
		this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
	}

	handleFilterTextInputChange(e) {
		this.props.onFilterTextInput(e.target.value);
	}

	handleInStockInputChange(e) {
		this.props.onInStockInput(e.target.checked);
	}

	render() {
		return (
			<form>
				<input className="search-input" type="text" placeholder="Search..." value={this.props.filterText}
					onChange={this.handleFilterTextInputChange} />
				<div className="checkbox-container">
					<input className="checkbox" type="checkbox" checked={this.props.inStockOnly} 
						onChange={this.handleInStockInputChange} /><span> Only show products in stock</span>
				</div>
			</form>
		);
	}
}

module.exports = SearchBar;