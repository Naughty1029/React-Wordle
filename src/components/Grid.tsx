import React, { memo } from "react";
import { Row } from "./Row";
import { FormattedGuess } from "@src/types/FormattedGuess";

type Props = {
  currentGuess: string;
  guesses: Array<Array<FormattedGuess> | undefined>;
  turn: number;
};

export const Grid: React.VFC<Props> = memo(
  ({ currentGuess, guesses, turn }) => {
    return (
      <div>
        {guesses.map((g, i) => {
          if (turn === i) {
            return <Row key={i} currentGuess={currentGuess} />;
          } else {
            return <Row key={i} guess={g} />;
          }
        })}
      </div>
    );
  }
);
