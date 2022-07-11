import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({}); //{a:'green',b:'yellow',c:'grey'}

  //past guesses
  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });

    // find any green letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null; //yellowのマッチのためにgreenになった文字はnullにしとく
      }
    });

    // find any yellow letters
    formattedGuess.forEach((l, i) => {
      //pipesが正解だとする
      //最初に1文字目をgreenにできたとして _ipes となる
      //次にユーザーが plans と入力したとする
      //この時、1文字目の p は yellow に該当するが、すでに green なのでマッチしてほしくない
      //だから l.color !== 'green' で green な時は値を更新しないようにする
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null; // 黄色は文字数に応じてカラーリングもしたいから、ここに関してはこれで大丈夫
      }
    });

    return formattedGuess;
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevState) => {
      let newGuesses = [...prevState];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prevState) => {
      return [...prevState, currentGuess];
    });

    setTurn((prevState) => {
      return prevState + 1;
    });

    setUsedKeys((prevState) => {
      let newKeys = { ...prevState };
      formattedGuess.forEach((l) => {
        const currentColor = newKeys[l.key];
        if (l.color === "green") {
          newKeys[l.key] = "green";
          return;
        }

        if (l.color === "yellow" && currentColor !== "green") {
          newKeys[l.key] = "yellow";
          return;
        }

        if (
          l.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "yellow"
        ) {
          newKeys[l.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  };

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      // guessesが5以下の時のみ実行
      if (turn > 5) {
        console.log("いっぱいです");
        return;
      }
      // guessesには単語の二重被りは禁止
      if (history.includes(currentGuess)) {
        console.log("被ってます");
        return;
      }
      // 文字数が5文字なのかチェックする
      if ([...currentGuess].length !== 5) {
        console.log("文字数が5文字じゃありません");
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    //deleteキーで入力文字の削除
    if (key === "Backspace") {
      setCurrentGuess((prevState) => {
        return prevState.slice(0, -1);
      });
      return;
    }
    //アルファベットキーかつ入力文字が5文字未満ならstate更新
    if (/^[A-Za-z]$/.test(key)) {
      if ([...currentGuess].length < 5) {
        setCurrentGuess((prevState) => {
          return prevState + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys };
};

export default useWordle;
