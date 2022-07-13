import { useQuery } from "react-query";

export const useSolution = () => {
  const fetchSolution = async () => {
    let url = "";
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:3001/solutions";
    }
    if (process.env.NODE_ENV === "production") {
      url =
        "https://gist.githubusercontent.com/Naughty1029/6c0ce5aaaefcf669722afb5196d3b312/raw/04f434457e7972b2b67e0fd9653214cd92fe0292/wordle_solutions";
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
