import { useState } from "react";

function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (current < 2) setCurrent((prev) => prev + 1);
  }
  function handlePrevious() {
    if (current > 0) setCurrent((prev) => prev - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
        &times;
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={current >= 0 ? "active" : ""}>1</div>
            <div className={current >= 1 ? "active" : ""}>2</div>
            <div className={current === 2 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            {current + 1}: {messages[current]}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
