import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home (Demo Counter)</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
