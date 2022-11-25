import styles from './User.module.css';

import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div className={styles.host}>
      <nav className={styles.menu}>
        <Link to="new">New</Link>
        <Link to="1">Toto</Link>
        <Link to="2">Titi</Link>
        <Link to="3">Tata</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default User;
