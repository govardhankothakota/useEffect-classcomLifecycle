import React, { Component } from "react";

export default class CCCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      wickets: 0,
    };
  }
  componentDidMount = () => {
    console.log(`CCCounter-componentDidMount-loaded`);
  };
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(nextState);
    console.log(this.state);
   

    if (nextState.wickets != this.state.wickets) {
      return true;
    } else {
      return false;
    }
    console.log(`shouldComponentUpdate`);
    return true;
   
  };
  componentDidUpdate = () => {
    console.log(`componentDidUpdate`);
  };
  componentWillUnmount = () => {
    console.log(`CCCounter-componentWillUnmount-unloaded`);
  };

  render() {
    console.log(`CCCounter - render`);
    return (
      <div className="counter">
        <h2>CC-Counter</h2>
        <h2>Score:{this.state.score}</h2>
        <h2>Wickets:{this.state.wickets}</h2>
        <button
          onClick={() => {
            this.setState({ score: this.state.score + 1 });
          }}
        >
          Increment Score
        </button>
        <button
          onClick={() => {
            this.setState({ score: this.state.score - 1 });
          }}
        >
          Decrement Score
        </button>
        <button
          onClick={() => {
            this.setState({ wickets: this.state.wickets + 1 });
          }}
        >
          Increment Wickets
        </button>
        <button
          onClick={() => {
            this.setState({ wickets: this.state.wickets - 1 });
          }}
        >
          Decrement Wickets
        </button>
      </div>
    );
  }
}
