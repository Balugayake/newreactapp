// Signup.js
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>Sign up or Log in</h1>
      <button>
        <Link to="/signup">Sign up</Link>
      </button>
      <button>
        <Link to="/login">Log in</Link>
      </button>
    </div>
  );
};

export default Signup;
