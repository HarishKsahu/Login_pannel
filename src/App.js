import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='wrapper bg-dark d-flex align-item-center justify-content-center w-100'>
      <div className='login'>
        <h2 className='mb-3' align="center">Login</h2>
        <form className='needs-validation'>
          <div className='form-group was-validated mb-2'>
            <label htmlFor='email' className='form-label'>Email Address</label>
            <input type="email" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type="password" className='form-control' required></input>
          </div>
          <button type='submit' className='btn btn-success w-100 mt-2'>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default App;
