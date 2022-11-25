import "./Select.css";

import React, { Component, useEffect, useRef, useState } from "react";
import classNames from "classnames";

// class Select extends Component {
//   state = {
//     menuOpen: false,
//   };

//   handleValueClick = () => {
//     const { menuOpen } = this.state;
//     this.setState({
//       menuOpen: !menuOpen,
//     })
//   }

//   render() {
//     const { menuOpen } = this.state;
//     return (
//       <div className="Select">
//         <div className="value" onClick={this.handleValueClick}>Value</div>
//         <div className="menu" hidden={!menuOpen}>
//           <div className="item">Option 1</div>
//           <div className="item">Option 2</div>
//           <div className="item">Option 3</div>
//         </div>
//       </div>
//     )
//   }
// }

// class Select extends Component {
//   state = {
//     menuOpen: false,
//   };

//   handleValueClick = () => {
//     const { menuOpen } = this.state;
//     this.setState({
//       menuOpen: !menuOpen,
//     });
//   };

//   render() {
//     const { menuOpen } = this.state;
//     return (
//       <div className="Select">
//         <div className="value" onClick={this.handleValueClick}>
//           Value
//         </div>
//         <div className={classNames('menu', { hidden: !menuOpen })}>
//           <div className="item">Option 1</div>
//           <div className="item">Option 2</div>
//           <div className="item">Option 3</div>
//         </div>
//       </div>
//     );
//   }
// }

// class Select extends Component {
//   state = {
//     menuOpen: false,
//   };

//   handleValueClick = () => {
//     const { menuOpen } = this.state;
//     this.setState({
//       menuOpen: !menuOpen,
//     });
//   };

//   render() {
//     const { menuOpen } = this.state;

//     // let menuEl; // undefined

//     // if (menuOpen) {
//     //   menuEl = (
//     // <div className="menu">
//     //   <div className="item">Option 1</div>
//     //   <div className="item">Option 2</div>
//     //   <div className="item">Option 3</div>
//     // </div>
//     //   );
//     // } else {
//     //   menuEl = <div>Menu closed</div>
//     // }

//     // const menuEl = menuOpen ? (
//     //   <div className="menu">
//     //     <div className="item">Option 1</div>
//     //     <div className="item">Option 2</div>
//     //     <div className="item">Option 3</div>
//     //   </div>
//     // ) : (
//     //   <div>Menu closed</div>
//     // );

//     // const menuEl = menuOpen ? (
//     //   <div className="menu">
//     //     <div className="item">Option 1</div>
//     //     <div className="item">Option 2</div>
//     //     <div className="item">Option 3</div>
//     //   </div>
//     // ) : (
//     //   null
//     // );

//     // const menuEl = menuOpen && (
//     //   <div className="menu">
//     //     <div className="item">Option 1</div>
//     //     <div className="item">Option 2</div>
//     //     <div className="item">Option 3</div>
//     //   </div>
//     // );

//     // console.log(menuEl);

//     return (
//       <div className="Select">
//         <div className="value" onClick={this.handleValueClick}>
//           Value
//         </div>
//         {menuOpen && (
//           <div className="menu">
//             <div className="item">Option 1</div>
//             <div className="item">Option 2</div>
//             <div className="item">Option 3</div>
//           </div>
//         )}

//         {/*
//         {"ABC"}
//         {123}
//         {true}
//         {false}
//         {['A', 'B', 'C']}
//         {{key: 'value'}} -> Error : Object are not valid as React child
//         {null}
//         {undefined}
//         {() => {}} -> Error : Functions are not valid as a React child
//         {(() => 'ABC')()} L'appel d'une fonction OK
//         {React.createElement('span', { id: 'name' }, 'Romain')}
//         {<span id="name">Romain</span>}
//         */}
//       </div>
//     );
//   }
// }

// class Select extends Component {
//   state = {
//     name: 'Romain',
//     menuOpen: false,
//   };

//   handleValueClick = () => {
//     const { menuOpen } = this.state;
//     this.setState({
//       menuOpen: !menuOpen,
//     });
//   };

//   render() {
//     const { menuOpen } = this.state;
//     const { items = [], value = items[0] } = this.props;

//     // const itemEls = [];

//     // for (const item of items) {
//     //   itemEls.push(<div className="item">{item}</div>)
//     // }

//     const itemEls = items.map((item) => <div key={item} className="item">{item}</div>);

//     return (
//       <div className="Select">
//         <div className="value" onClick={this.handleValueClick}>
//           {value}
//         </div>
//         {menuOpen && (
//           <div className="menu">
//             {itemEls}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Select;

/*
     a
    / \
   b   c


     a
   / | \
  b  c  d

     a
    / \
b[key='0']   b[key='1']

    a
  / | \
 b[key="0"]  b[key='1']   b[key='2']
*/

// Avec les classes le state est organisé sous forme d'un objet
// state = {
//   name: 'Romain',
//   menuOpen: false,
// };

// Pour lire le state, on utilise la clé : this.state.name
// Pour écrire dans le state, on utilise la clé : this.setState({ name: 'new value' });

// Avec le hook useState, le state est organise sous forme d'un tableau
// l'ordre des appels à useState détermine la position du tableau
// useState('Romain'); // la position 1 du tableau (l'indice 0)
// useState(false); // la position 2 du tableau (l'indice 1)

// const tmp = useState(false);
// const menuOpen = tmp[0];
// const setMenuOpen = tmp[1];

// const [name, setName] = useState('Romain');
// const [menuOpen, setMenuOpen] = useState(false);

function Select({ items = [], value = items[0], onValueChange = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const hostRef = useRef();

  const handleValueClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (item) => {
    onValueChange(item);
    setMenuOpen(false);
  };

  useEffect(() => {
    const callback = (event) => {
      if (!hostRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("click", callback);
    return () => {
      window.removeEventListener("click", callback);
    };
  }, []);

  const itemEls = items.map((item) => (
    <div key={item} className="item" onClick={() => handleItemClick(item)}>
      {item}
    </div>
  ));

  return (
    <div className="Select" ref={hostRef}>
      <div className="value" onClick={handleValueClick}>
        {value}
      </div>
      {menuOpen && <div className="menu">{itemEls}</div>}
    </div>
  );
}

export default Select;
