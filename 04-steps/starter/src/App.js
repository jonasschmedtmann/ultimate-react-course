const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const steps = 1;
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${steps >= 1 ? "active" : ""}`}>1</div>
        <div className={`${steps >= 2 ? "active" : ""}`}>2</div>
        <div className={`${steps >= 3 ? "active" : ""}`}>3</div>
      </div>
      <div className="message">
        Step {steps}: {messages[steps - 1]}
      </div>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Next
        </button>
      </div>
    </div>
  );
}
