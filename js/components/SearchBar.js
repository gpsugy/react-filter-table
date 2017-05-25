var React = require('react');
var ReactDOM = require('react-dom');

class SearchBar extends React.Component {
	render() {
		return (
			<div>
				<form>
					<input className="search-input" type="text" placeholder="Search..."/>
					<div className="checkbox-container">
						<input className="checkbox" type="checkbox" checked="checked" /><span>Only show products in stock</span>
					</div>
				</form>
			</div>
		);
	}
}

module.exports = SearchBar;