import { useEffect, useState } from "react";
import { Advice, AdviceCard } from "./components/AdviceCard";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState({} as Advice);

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <AdviceCard advice={advice} getAdvice={getAdvice} />
    </div>
  );
}

export default App;
