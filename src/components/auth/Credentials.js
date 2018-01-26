import React from 'react';


export default ({ submit, action, allowName = false }) => (
  <form onSubmit={e => {
    e.preventDefault();
    const { elements } = e.target;
    const data = action === 'Sign Up' ? 
    { 
      email: elements.email.value,
      password: elements.password.value,
      firstName: elements.firstName.value,
      lastName: elements.lastName.value,
    } : {
      email: elements.email.value,
      password: elements.password.value
    };
    console.log('data', data)
    submit(data);
  }}>
    { allowName && <label>First Name: <input name="firstName"/></label> }
    { allowName && <label>Last Name: <input name="lastName"/></label> }
    <label>email: <input name="email"/></label>
    <label>password: <input type="password" name="password"/></label>
    <button>{action}</button>
  </form>
);