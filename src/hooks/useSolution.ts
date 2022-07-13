import { useQuery } from "react-query";

export const useSolution = () => {
  const fetchSolution = async () => {
    let url = process.env.REACT_APP_SOLUTIONS_API;
    console.log(url);
    if (url === undefined) {
      return;
    }

    const res = await fetch(url);
    const json = await res.json();
    const randomNumber = Math.floor(Math.random() * json.length);
    const randomSolution = json[randomNumber];
    return randomSolution.word;
  };
  const { data: solution } = useQuery("solution", fetchSolution);

  return { solution } as const;
};
