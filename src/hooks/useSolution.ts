import { useQuery } from "react-query";

export const useSolution = () => {
  const fetchSolution = async () => {
    const res = await fetch("http://localhost:3001/solutions");
    const json = await res.json();
    const randomNumber = Math.floor(Math.random() * json.length);
    const randomSolution = json[randomNumber];
    return randomSolution.word;
  };
  const { data: solution } = useQuery("solution", fetchSolution);

  return { solution } as const;
};
