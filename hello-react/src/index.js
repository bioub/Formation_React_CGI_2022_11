import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }, 1000);


// setInterval(() => {
//   const rootEl = document.getElementById('root');
//   rootEl.innerHTML = '';
//   rootEl.append(App())
// }, 1000);