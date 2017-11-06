var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
      this.setState({
          counter: this.state.counter - 1
      });
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
      return React.createElement('div', {},
        React.createElement('button', {onClick: this.increment}, '+'),
        React.createElement('span', {}, 'Licznik ' + this.state.counter),
        React.createElement('button', {onClick: this.decrement}, '-')
      );
    }
});
