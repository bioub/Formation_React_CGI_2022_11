// import { Component } from "react";

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     // règle le this === undefined
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     const { count } = this.state;
//     this.setState({
//       count: count + 1,
//     });
//   }
//   render() {
//     const { count } = this.state;
//     return <button className="Counter" onClick={this.handleClick}>{count}</button>;
//   }
// }

// export default Counter;

// Historiquement avec Redux le composant doit être controllé
// puisque les valeurs viennent de l'extérieur (du store redux)

function Counter({ count, onIncrement, step, onStepChange }) {
  return (
    <div className="Counter">
      <button onClick={() => onIncrement()}>{count}</button>
      <input type="number" value={step} onChange={(e) => onStepChange(e.target.valueAsNumber)} />
    </div>
  );
}

export default Counter;
