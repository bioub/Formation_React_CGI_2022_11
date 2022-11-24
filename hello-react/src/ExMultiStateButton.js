// import { Component } from 'react';

// class ExMultiStateButton extends Component {
//   handleClick = () => {
//     const { value } = this.props;
//     const { items } = this.props;
//     const currentIndex = items.indexOf(value);
//     const newValue = items[(currentIndex + 1) % items.length];

//     this.setState({
//       value: newValue,
//     });
//   };

//   render() {
//     const { value } = this.props;
//     // les props sont accessibles via this.props
//     return <button className="ExMultiStateButton" onClick={this.handleClick}>{value}</button>;
//   }
// }

function ExMultiStateButton({ value, items, onValueChange }) {
  const handleClick = () => {
    const currentIndex = items.indexOf(value);
    const newValue = items[(currentIndex + 1) % items.length];

    onValueChange(newValue);
  };

  return <button className="ExMultiStateButton" onClick={handleClick}>{value}</button>;
}

export default ExMultiStateButton;

/*
Exercice 2 :
En vous inspirant de Counter
Au départ afficher le premier élément du tableau reçu en props
dans le bouton
A chaque clic, afficher le prochain élément du tableau (dans le bouton)
Si on arrive au dernier élément, afficher le premier
*/
