import "./Select.css";

import React, { useEffect, useRef, useState } from "react";

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
