import styles from './User.module.css';

import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchUsers } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../store/selectors';
import { userFetchUsers, userFetchUsersSuccess } from '../store/actions';

// function User() {
//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     fetchUsers().then((res) => {
//       setUsers(res.data);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <div className={styles.host}>
//       <nav className={styles.menu}>
//         <Link to="new">New</Link>
//         {loading ? 'Loading...' : users.map((user) => <Link key={user.id} to={String(user.id)}>{user.name}</Link>)}
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

function User() {
  const { loading, items } = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetchUsers());
    fetchUsers().then((res) => {
      dispatch(userFetchUsersSuccess(res.data));
    });
  }, [dispatch]);

  return (
    <div className={styles.host}>
      <nav className={styles.menu}>
        <Link to="new">New</Link>
        {loading ? 'Loading...' : items.map((user) => <Link key={user.id} to={String(user.id)}>{user.name}</Link>)}
      </nav>
      <Outlet />
    </div>
  );
}

export default User;
