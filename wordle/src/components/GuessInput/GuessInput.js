import React from 'react';

function GuessInput({ disabled = false, handleSubmit = (input) => {} }) {
  const [input, setInput] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(input);
        setInput('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        value={input}
        pattern="[A-Za-z]{5}"
        title="Exactly 5 characters, no spaces"
        disabled={disabled}
        onChange={(e) => {
          setInput(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
