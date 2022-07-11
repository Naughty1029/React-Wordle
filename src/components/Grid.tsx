import React from "react";
import { Row } from "./Row";

type Object = {
  key: string;
  color: string;
};

type Props = {
  currentGuess: string;
  guesses: Array<Array<Object> | undefined>;
  turn: number;
};

export const Grid: React.VFC<Props> = ({ currentGuess, guesses, turn }) => {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
};
