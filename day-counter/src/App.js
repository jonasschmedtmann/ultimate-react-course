import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const currentDate = new Date();
  const [inputDays, setInputDays] = useState(0);
  const [sliderInput, setSliderInput] = useState(1);
  currentDate.setDate(currentDate.getDate() + (count || inputDays));
  function handleChange(e) {
    setInputDays(Number(e.target.value));
  }
  function handleSliderChange(e) {
    setSliderInput(Number(e.target.value));
  }
  function handleReset() {
    setInputDays(0);
    setSliderInput(1);
    currentDate.setDate(currentDate.getDate());
  }
  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <span>count:{count}</span>
        <button onClick={() => setCount((c) => c - step)}>-</button>
      </div>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
      <span>step:{step}</span>
      <button
        onClick={() => {
          setStep((s) => s - 1);
        }}
      >
        -
      </button>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={sliderInput}
          onChange={handleSliderChange}
        />
        <span>Step:{sliderInput}</span>
      </div>
      <div>
        <button onClick={() => setInputDays((i) => i + sliderInput)}>+</button>
        <input type="text" value={inputDays} onChange={handleChange} />
        <button onClick={() => setInputDays((i) => i - sliderInput)}>-</button>
      </div>
      <p>
        <span>
          {count === 0 && inputDays === 0
            ? "today is "
            : count > 0 && inputDays > 0
              ? `${count || inputDays}  days form today is `
              : `${Math.abs(count) || Math.abs(inputDays)} days ago was`}
        </span>
        <span> {currentDate.toDateString()}</span>
      </p>
      {count !== 0 || step !== 0 || inputDays !== 0 || sliderInput !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
