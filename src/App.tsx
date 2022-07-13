// import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Wordle } from "./components/Wordle";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div>
          <h1>
            <img src="assets/logo.png" alt="" />
          </h1>
        </div>
        <Wordle />
      </div>
    </QueryClientProvider>
  );
}

export default App;
