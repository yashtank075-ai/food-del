import React from "react";
import "./Register.css";
import axios from "axios";
import { Formik, Field, Form } from "formik";

export default function Register() {

  const initialValues = {
    fullname: "",
    email: "",
    password: ""
  };

  const handleSubmit = async (values) => {
    console.log("Form values:", values);

    try {
      const res = await axios.post(
        "http://localhost:5000/user/create",
        values
      );
      console.log("Success:", res.data);
      alert("User registered successfully");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image"></div>

      <div className="auth-form">
        <h2>Create Account 🍽️</h2>
        <p>Join us & start ordering delicious food</p>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <label>Full Name</label>
            <Field name="fullname" placeholder="Enter Full Name" />

            <label>Email Address</label>
            <Field name="email" type="email" placeholder="Enter Email" />

            <label>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Enter Password"
            />

            <button type="submit">Register</button>

            <span>
              Already have an account? <a href="/login">Login</a>
            </span>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
