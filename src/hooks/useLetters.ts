import { useQuery } from "react-query";

type State = {
  key: string;
};

export const useLetters = () => {
  const fetchLetters = async () => {
    let url: string = process.env.REACT_APP_LETTERS_API!;

    const res = await fetch(url);
    return res.json();
  };

  const { data: letters, status } = useQuery<Array<State>>(
    "letters",
    fetchLetters
  );

  return { letters, status } as const;
};
