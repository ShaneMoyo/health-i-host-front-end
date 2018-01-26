import React from 'react';


export default ({ submit, action, allowName = false }) => (
  <form onSubmit={e => {
    e.preventDefault();
    const { elements } = e.target;
    const data = Object.keys(elements).reduce((obj, key) => {
      obj[key] = elements[key].value;
      return obj;
    }, {});
    submit(data);
  }}>
    { allowName && <label>First Name: <input name="firstName"/></label> }
    { allowName && <label>Last Name: <input name="lastName"/></label> }
    <label>email: <input name="email"/></label>
    <label>password: <input type="password" name="password"/></label>
    <button>{action}</button>
  </form>
);