import React, { memo } from "react";
import { FormattedGuess } from "@src/types/FormattedGuess";

type Props = {
  guess?: Array<undefined | FormattedGuess>;
  currentGuess?: string;
};

export const Row: React.VFC<Props> = memo(({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => {
          if (l === undefined) {
            return "";
          } else {
            return (
              <div key={i} className={l.color}>
                {l.key}
              </div>
            );
          }
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = [...currentGuess];

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});
