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

// import React from 'react';

// function App() {
//   return React.createElement(
//     'div',
//     { className: 'App' },
//     'Hello ',
//     React.createElement('span', { id: 'name' }, 'Romain'),
//   );
// }

function App() {
  return (
    <div className="App">
      Hello <span id="name">Romain</span> il est <span>{(new Date()).toLocaleTimeString()}</span>
    </div>
  );
}

export default App;
