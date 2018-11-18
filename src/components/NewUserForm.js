import React from 'react';

const NewUserForm = ({ onNewUser = f => f }) => {
  let handle;
  let password;
  const submit = e => {
    e.preventDefault();
    onNewUser(handle.value, password.value);
    handle.value = '';
    handle.focus();
    password.value = '';
    password.focus();
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="handle"
        ref={(input) => (handle = input)}
        type="text"
        placeholder="Handle..."
        required
      />
      <input
        className="password"
        ref={(input) => (password = input)}
        type="password"
        placeholder="Password..."
        required
      />
      <button className="submess">Sign Up Please!</button>
    </form>
  );
};

export default NewUserForm;
