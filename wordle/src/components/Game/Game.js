import React from 'react';

// Components
import GuessInput from '../GuessInput/';
import Guess from '../Guess';
import Banner from '../Banner';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('');

  function handleGuess(input) {
    const newGuess = {
      id: crypto.randomUUID(),
      guess: input,
    };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (input === answer) {
      setStatus('happy');
    }
  }

  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
          let word = null;

          if (guesses.length > rowIndex) {
            word = checkGuess(guesses[rowIndex].guess, answer);
          }

          return <Guess key={rowIndex} word={word} />;
        })}
      </div>

      <GuessInput disabled={!!status} handleSubmit={handleGuess} />

      {status === 'sad' && (
        <Banner status={status}>
          <p>
            Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>
            .
          </p>
        </Banner>
      )}

      {status === 'happy' && (
        <Banner status={status}>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {guesses.length} {guesses.length > 1 ? 'guesses' : 'guess'}
            </strong>
            .
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;
