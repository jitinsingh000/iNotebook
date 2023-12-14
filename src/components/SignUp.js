import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp(props) {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmpassword: "" });
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authToken);
      props.showAlert("Signed Up Successfully","success");
      navigate('/');
    }
    else {
      props.showAlert("Invalid Details","danger");
    }
  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <div className='container mt-2'>
      <h2 className='my-3'>Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" name='name' onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmpassword" name='confirmpassword' onChange={onChange} minLength={5} required />
        </div>
        <button disabled={credentials.name.length < 5 || credentials.email.length < 5 || credentials.password.length < 5 || credentials.confirmpassword.length < 5} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
