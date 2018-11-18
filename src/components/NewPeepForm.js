import React from 'react';

const NewPeepForm = ({ onNewPeep = f => f }) => {
  let body;
  const submit = e => {
    e.preventDefault();
    onNewPeep(body.value);
    body.value = '';
    body.focus();
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="body"
        ref={input => (body = input)}
        type="text"
        placeholder="Peep..."
        required
      />
      <button className="submess">Add Peep</button>
    </form>
  );
};

export default NewPeepForm;
