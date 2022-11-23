import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // règle le this === undefined
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }
  render() {
    const { count } = this.state;
    return <button className="Counter" onClick={this.handleClick}>{count}</button>;
  }
}

export default Counter;

// // buttonEl.addEventListener('click', this.handleClick);

// buttonEl.addEventListener('click', (event) => {
//   this.count++;
// });

// buttonEl.onclick = (event) => {
//   this.count++;
// };

{/* <button onclick="increment()"></button> */}