import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState((current) => ({ isLoading: false }));
    }, 5000);
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <p>{isLoading ? `Loading...` : `We're ready`}</p>
      </div>
    );
  }
}

export default App;
