import { useEffect, useState } from "react";

const arr = ["USD", "EUR", "CAD", "INR"];
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [output, setOuput] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isConverted, setIsConverted] = useState("");
  function handleSetfrom(e) {
    setFrom(e.target.value);
  }
  function handleSetTo(e) {
    setTo(e.target.value);
  }
  useEffect(
    function () {
      setIsLoading(true);
      async function currencyConvertor() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
        );
        const data = await res.json();
        console.log(data.rates[to]);
        setOuput(data.rates[to]);
        setIsLoading(false);
      }
      if (from === to) return setIsConverted(amount);
      currencyConvertor();
    },
    [amount, from, to],
  );
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select value={from} onChange={handleSetfrom} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={to} onChange={handleSetTo} disabled={isLoading}>
        {/* disabling the jsx in case of loading time period */}
        {arr.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <p>
        {output} {to}
      </p>
    </div>
  );
}

export default App;
