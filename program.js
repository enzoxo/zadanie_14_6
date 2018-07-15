var Counter = React.createClass({
	getDefaultProps: function() {
		return {
			default: 0
		}
	},
	getInitialState: function() {
		return {
			counter: this.props.default,
		};
	},

	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	},

	componentsWillMount(){
		console.log("laduje dane z serwera");
	},

	componentDidMount(){
		console.log("Komponent znajduje sie na stronie, ma dostęp do drzewa DOM");
	},

	render: function() {
		console.log('Renderuje komponent...');
		return React.createElement('div', {className: 'count'},
			React.createElement('span', {}, 'Stan Licznika: ' + this.state.counter),
			React.createElement('button', {onClick: this.increment}, '+1'),
			React.createElement('button', {onClick: this.decrement}, '-1')
			);
	}
});

var counter = React.createElement('div', {},
	React.createElement(Counter, {default: 3}),
	React.createElement(Counter, {default: 5}),
	React.createElement(Counter, {default: 10}),
	React.createElement(Counter)
);


ReactDOM.render(counter, document.getElementById('app'));