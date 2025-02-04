import { useEffect, useState } from "react";
import "./App.css";
import CurrencyInput from "./components/CurrencyInput";

const EXCHANGE_RATE = 1300;

function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (currency, value) => {
    if (currency === "krw") {
      setState({
        krw: value,
        usd: value / EXCHANGE_RATE,
      });
    } else {
      setState({
        krw: value * EXCHANGE_RATE,
        usd: value,
      });
    }
  };

  return (
    <>
      <h1>환율변환기(KRW-USD)</h1>
      <CurrencyInput currency={"krw"} value={state.krw} onChange={onChange} />
      <CurrencyInput currency={"usd"} value={state.usd} onChange={onChange} />
    </>
  );
}

export default App;
