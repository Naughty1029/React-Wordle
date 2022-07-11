import React, { useEffect, useState } from "react";

type Props = {
  usedKeys: {
    [key: string]: string;
  };
};

type State = {
  key: string;
};

export const Keypad: React.VFC<Props> = ({ usedKeys }) => {
  const [letters, setLetters] = useState<Array<State> | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
};
