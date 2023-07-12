import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ baseURL }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    const fullName = event.target.fullName.value;
    const userName = event.target.userName.value;
    const password = event.target.password.value;
    //console.log(fullName, userName, password);

    fetch(`${baseURL}/login/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, userName, password }),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/"); // Redirect to the signin page on successful signup
        } else {
          return response.json().then((errorData) => {
            setErrorMessage(errorData.message); // Set the error message received from the backend
          });
        }
      })
      .catch((error) => {
        console.log("Error occurred during signup:", error);
        setErrorMessage("An error occurred during signup."); // Set a generic error message
      });
  };

  const changeAuthMode = () => {
    navigate("/");
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              className="form-control mt-1"
              placeholder="User Name"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Password"
              required
            />
          </div>
          {errorMessage && <div className="text-danger">{errorMessage}</div>}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
