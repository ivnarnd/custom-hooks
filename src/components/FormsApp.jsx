import React, { useState } from 'react'
import { UseForm } from '../hooks/UseForm';

export const FormsApp = () => {
  //manejador de evento del form
  const {formState,onInputChange} = UseForm({
    username:'',
    email:'',
    password:''
  });
  const {username,email,password} = formState;
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formState);
  }
  return (
    <form className="row g-3" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
                type="text" 
                className="form-control" 
                id="username" 
                name='username'
                value={username}
                onChange={onInputChange} 
            />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
                type="text" 
                className="form-control" 
                id="email" 
                name='email'
                value={email}
                onChange={onInputChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control"
                id="password" 
                name='password'
                value={password}
                onChange={onInputChange}
            />
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
    </form>
  )
}
