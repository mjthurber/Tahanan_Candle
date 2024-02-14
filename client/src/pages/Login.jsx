import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Button from "react-bootstrap/Button";
import Auth from '../utils/auth';
import Nav from '../components/Nav/Navbar'
import "./login.css";
import Footer from '../components/Footer/Footer';


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
    <div style={{minHeight:"100vh"}}>
      <Nav />
      <div className='container loginBox flex flex-column bg-dark text-white'>
        <Link to="/signup" className='text-white'>← Go to Signup</Link>

        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email address:&nbsp;</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="pwd">Password:&nbsp;</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p>The provided credentials are incorrect</p>
            </div>
          ) : null}
          <div>
            <Button type="submit" className='loginButton'>Login</Button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Login;
