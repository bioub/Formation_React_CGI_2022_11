import './Select.css';

import React, { Component } from 'react';
import classNames from 'classnames';

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

class Select extends Component {
  state = {
    menuOpen: false,
  };

  handleValueClick = () => {
    const { menuOpen } = this.state;
    this.setState({
      menuOpen: !menuOpen,
    });
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <div className="Select">
        <div className="value" onClick={this.handleValueClick}>
          Value
        </div>
        {menuOpen && (
          <div className="menu">
            <div className="item">Option 1</div>
            <div className="item">Option 2</div>
            <div className="item">Option 3</div>
          </div>
        )}
      </div>
    );
  }
}

export default Select;
