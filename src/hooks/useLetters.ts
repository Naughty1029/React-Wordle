import { useQuery } from "react-query";

type State = {
  key: string;
};

export const useLetters = () => {
  const fetchLetters = async () => {
    let url = "";
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:3001/letters";
    }
    if (process.env.NODE_ENV === "production") {
      url =
        "https://gist.githubusercontent.com/Naughty1029/66a4076fb15172b8a49eedbc5984ed50/raw/1951015e153432ed475e99c1d6b5078310cc0328/wordle_letters";
    }

    const res = await fetch(url);
    return res.json();
  };

  const { data: letters, status } = useQuery<Array<State>>(
    "letters",
    fetchLetters
  );

  return { letters, status } as const;
};
