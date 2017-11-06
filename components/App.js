var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {onClick: this.increment},
        React.createElement(Counter),
        React.createElement(Counter),
        React.createElement(Counter),
        React.createElement(Counter),
        React.createElement(Counter)
      )
    );
  }
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
