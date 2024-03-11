import React, { useState, useContext } from "react";
import "../Modules/Signup.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContextProvider";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formData = {
    username,
    email,
    password,
    confirmPassword,
  };

  const { userData, setUserData } = useContext(UserContext);

  const handleSignup = (event) => {
    event.preventDefault();

    // Check if any of the fields are empty
    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill out all fields");
      return;
    }

    // Password validation with regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.match(passwordRegex)) {
      setError(
        "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit"
      );
      return;
    }

    // Password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    console.log(storedUserData);

    // Check if user already exists in localStorage
    if (storedUserData) {
      const existingUser = storedUserData.find(
        (user) => user.username === username || user.email === email
      );

      if (existingUser) {
        setError(
          "Username or email already exists. Please choose a different username or email."
        );
        return;
      }
    }

    // Form validation passed, create user data
    const newUserData = {
      username,
      email,
      password,
    };

    setUserData([...userData, newUserData]);
    localStorage.setItem(
      "userData",
      JSON.stringify([...userData, newUserData])
    );

    // Navigate to home page
    navigate("/home");
  };

  return (
    <div>
      <section>
        <span></span>
        {/* Repeat the span elements as needed */}
        <div className="signin">
          <div className="content">
            <h2>Sign up</h2>
            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i>Username</i>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i>Email</i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i>Password</i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i>Confirm Password</i>
              </div>
              <p
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  fontStyle: "bold",
                }}
              >
                {error}
              </p>
              {/* Remove the error div */}
              <div className="inputBox">
                <input type="submit" value="Sign up" onClick={handleSignup} />
              </div>
              <p>
                If you already have an account, <a href="/login">log in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
