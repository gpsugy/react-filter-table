var React = require('react');
var ReactDOM = require('react-dom');

class SearchBar extends React.Component {
	render() {
		return (
			<div>
				<form>
					<input className="search-input" type="text" placeholder="Search..."/>
					<input type="checkbox" checked="checked" />
				</form>
			</div>
		);
	}
}

module.exports = SearchBar;