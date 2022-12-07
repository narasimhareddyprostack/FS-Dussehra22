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
            type="text"
            onChange={(event) => {
              setUser({ ...user, email: event.target.value });
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            onChange={(event) => {
              setUser({ ...user, password: event.target.value });
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
