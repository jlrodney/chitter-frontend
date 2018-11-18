import React from 'react';

const SignInForm = ({ userSignIn = f => f }) => {
  let handle;
  let password;
  const submit = e => {
    e.preventDefault();
    userSignIn(handle.value, password.value);
    handle.value = '';
    handle.focus();
    password.value = '';
    password.focus();
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="handle_sign_in"
        ref={(input) => (handle = input)}
        type="text"
        placeholder="Handle..."
        required
      />
      <input
        className="password_sign_in"
        ref={(input) => (password = input)}
        type="password"
        placeholder="Password..."
        required
      />
      <button className="submess">Sign In Please!</button>
    </form>
  );
};

export default SignInForm;
