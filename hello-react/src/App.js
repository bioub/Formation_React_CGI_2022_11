// function App() {
//   const divEl = document.createElement('div');
//   divEl.className = "App";
//   const spanEl = document.createElement('span');
//   spanEl.id = "name";
//   spanEl.append('Romain');
//   const clockEl = document.createElement('span');
//   clockEl.append((new Date()).toLocaleTimeString());
//   divEl.append('Hello ', spanEl, ' il est ', clockEl);
//   return divEl;
// }

import { useState } from 'react';
import Clock from './ClockClass';
import ClockWithControls from './ClockWithControls';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import Select from './Select';
import UserForm from './UserForm';

// import React from 'react';

// function App() {
//   return React.createElement(
//     'div',
//     { className: 'App' },
//     'Hello ',
//     React.createElement('span', { id: 'name' }, 'Romain'),
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       Hello <span id="name">Romain</span> il est <span>{(new Date()).toLocaleTimeString()}</span>
//     </div>
//   );
// }

function App() {
  // console.log('App renders');
  const [color, setColor] = useState('Vert');

  const handleValueChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="App">
      <Hello />
      {/* React.createElement(Hello, { name: 'Romain', age: 37, isActive: true }) */}
      <Hello name="Romain" age={37} isActive />
      {/* <Clock /> */}
      {/* si la valeur de count vient du parent, donc passe par les props
         -> Composant Controlé
      */}
      {/* <Counter count={count} onIncrement={() => count++} /> */}
      {/* si la valeur de count est interne, donc définie dans le state de Counter
         -> Composant Non Controlé (plus simple à utiliser mais moins réutilisable)
      */}
      <Counter />
      <UserForm />
      <ExHelloWorld />
      <ExHelloWorld />
      <ExMultiStateButton items={['Rouge', 'Vert', 'Bleu']} value={color} onValueChange={handleValueChange} />

      <Select items={['Rouge', 'Vert', 'Bleu']} value={color} onValueChange={handleValueChange} />
      <p>Couleur sélectionnée : {color}</p>

      <ClockWithControls />
    </div>
  );
}

export default App;
