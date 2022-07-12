// import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Wordle } from "./components/Wordle";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Wordle (Lingo)</h1>
        <Wordle />
      </div>
    </QueryClientProvider>
  );
}

export default App;
