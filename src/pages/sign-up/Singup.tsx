import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledInput, StyledLogin } from "../../components/login-sign-form/StyledLogin";


const Signup= () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setUser(prevState => ({
      ...prevState,
      [id]: value
    }));

    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formErrors: {
      email: string;
      password: string;
      repeatPassword: string;
    } = {
      email: '',
      password: '',
      repeatPassword: ''
    };

    if (!user.email) {
      formErrors.email = 'Can’t be empty';
    }

    if (!user.password) {
      formErrors.password = "Can’t be empty";
    } else if (user.password.length < 8) {
      formErrors.password = "Min 8 characters";
    }

    if (!user.repeatPassword) {
      formErrors.repeatPassword = 'Can’t be empty';
    } else if (user.repeatPassword !== user.password) {
      formErrors.repeatPassword = "don’t match";
    }

    setErrors(formErrors);

    const hasErrors = Object.values(formErrors).some(error => error !== '');

    if (hasErrors) {
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    navigate('/login')
  };

  return (
    <StyledLogin>
      <img src="/images/logo.svg" alt="logo icon" />
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
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
            <div>
            <StyledInput
              type="password"
              placeholder="Repeat Password"
              id="repeatPassword"
              value={user.repeatPassword}
              onChange={handleChange}
              error={errors.repeatPassword}
            />
            {errors.repeatPassword && <span className="error">{errors.repeatPassword}</span>}
            </div>
          </div>
          <button type="submit">Create an account</button>
        </form>
        <div>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Signup;