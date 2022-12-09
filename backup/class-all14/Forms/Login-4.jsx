import React, { useState } from "react";

const Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });
  return (
    <React.Fragment>
      <pre>{JSON.stringify(user)}</pre>
      <form>
        <div>
          <label>Email Id</label>
          <input
            name="email"
            type="text"
            onChange={(event) => {
              setUser({ ...user, [event.target.name]: event.target.value });
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="text"
            onChange={(event) => {
              setUser({ ...user, [event.target.name]: event.target.value });
            }}
          />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
