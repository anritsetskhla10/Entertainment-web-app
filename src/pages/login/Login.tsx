import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledInput, StyledLogin } from "../../components/login-sign-form/StyledLogin";

interface LoginProps {
  setHideNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setHideNav }) => {
  
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setUser(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    let formErrors = { email: "", password: "" };

    if (!user.email) {
      formErrors.email = "Can’t be empty";
    } else if (user.email !== storedUser.email) {
      formErrors.email = "Email does not match";
    }

    if (!user.password) {
      formErrors.password = "Can’t be empty";
    } else if (user.password !== storedUser.password) {
      formErrors.password = "Password does not match";
    }

    setErrors(formErrors);

    const hasErrors = Object.values(formErrors).some(error => error !== "");
    if (hasErrors) {
      return;
    }

    setHideNav(false);
    navigate("/home");
  };

  return (
    <StyledLogin >
      <img src="/images/logo.svg" alt="logo icon" />
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div className="input-container">
            <div>
            <StyledInput 
                type="text"
                placeholder="Email address"
                id="email"
                value={user.email}
                onChange={handleChange}
                error={errors.email}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
            <StyledInput
                type="password"
                placeholder="Password"
                id="password"
                value={user.password}
                onChange={handleChange}
                error={errors.password}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
          </div>
          <button type="submit">Login to your account</button>
        </form>
        <div>
          <p>Don’t have an account?</p>
          <Link to="/sign">Sign Up</Link>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;

