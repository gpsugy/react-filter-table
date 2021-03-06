var React = require('react');
var ReactDOM = require('react-dom');

function renderName(props) {
	let elt = props.stocked ? <td key={props.name}>{props.name}</td> : <td key={props.name} className="outofstock">{props.name}</td>;
	return elt;
}

class ProductRow extends React.Component {
	render() {
		return (
			<tr>
				{renderName(this.props)}
				<td>{this.props.price}</td>
			</tr>
		);
	}
}

module.exports = ProductRow;