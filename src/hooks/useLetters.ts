import { useQuery } from "react-query";

type State = {
  key: string;
};

export const useLetters = () => {
  const fetchLetters = async () => {
    const res = await fetch("http://localhost:3001/letters");
    return res.json();
  };

  const { data: letters, status } = useQuery<Array<State>>(
    "letters",
    fetchLetters
  );

  return { letters, status } as const;
};
