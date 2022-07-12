import React, { memo } from "react";
import { useLetters } from "../hooks/useLetters";

type Props = {
  usedKeys: {
    [key: string]: string;
  };
};

export const Keypad: React.VFC<Props> = memo(({ usedKeys }) => {
  const { letters, status } = useLetters();

  return (
    <div className="keypad">
      {status === "success" &&
        letters &&
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
});
