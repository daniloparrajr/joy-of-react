import React from 'react';
import { range } from '../../utils';
import clsx from 'clsx';

function Guess({ word = null }) {
  return (
    <p className="guess">
      {range(0, 5).map((index) => (
        <span key={index} className={clsx('cell', word && word[index].status)}>
          {word && word[index].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
