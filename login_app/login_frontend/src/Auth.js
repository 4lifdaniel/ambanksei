import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Auth({ baseURL, handleLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //Reset error message to empty
    setError("");

    // Send fetch request for authentication
    fetch(`${baseURL}/login/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        // Handle authentication response
        if (data.errorMessage) {
          // Authentication failed
          setError(data.errorMessage);
        } else {
          // Authentication successful
          // Perform necessary actions
          handleLogin();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred during authentication.");
      });
  };

  const navigate = useNavigate();
  const changeAuthMode = () => {
    navigate("/signup");
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              name="uname"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              className="form-control mt-1"
              placeholder="Enter User Name"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
          </div>
          {error && <div className="text-danger">{error}</div>}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  );
}

export default Auth;
