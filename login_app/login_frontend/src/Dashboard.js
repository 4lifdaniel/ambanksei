import { Link } from "react-router-dom";

function Dashboard({ handleLogout }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            My Dashboard
          </Link>
          <button className="btn btn-primary nav-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="container mt-4">
        <h1>Welcome to the Dashboard!</h1>
        {/* Dashboard content goes here */}
      </div>
    </div>
  );
}

export default Dashboard;
