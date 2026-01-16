import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="auth-container">
      {/* Left Image */}
      <div className="auth-image"></div>

      {/* Right Form */}
      <div className="auth-form">
        <h2>Welcome Back 👋</h2>
        <p>Login to order your favourite food</p>

        <form>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>

          <span>
            Don’t have an account? <a href="/register">Register</a>
          </span>
        </form>
      </div>
    </div>
  );
}
