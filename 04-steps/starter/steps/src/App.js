import { useState } from "react";

const message = ["learn react *", "apply for jobs ", "invest your new income"];
export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>pass in content</p>pass in content
      </StepMessage>
      <StepMessage step={2}>
        <p>read children prop</p>pass in content
      </StepMessage>
    </div>
  );
}

function Steps() {
  // create state variable using useState. the default value for teh state is passed as a param
  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  // use setStep to update the step state variable
  const [test, setTest] = useState({ name: "surya" });
  // console.log(arr);

  function handlePrevious() {
    if (step > 1) {
      setStep((curStep) => curStep - 1);
      setTest({ name: "surya" });
    }
  }
  function handleNext() {
    // alert("next");
    if (step < 3) {
      setStep((curStep) => curStep + 1);
    }
    setTest({ name: "ubi" });
    // mutating the object
    // test.name = "ubi"; //this way also we can change the state of the object and rerendering also happens but it is not preferred
  }
  // parent component of all teh otehr ocmponent
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{message[step - 1]}</StepMessage>
          <Button
            backgroundColor="#fff"
            textColor="#333"
            onClick={() => alert(`learn hot to ${message[step - 1]}`)}
          >
            learn how the child prop works
          </Button>

          {/* <p className="message">hello</p> */}
          <div className="buttons">
            <Button
              backgroundColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
            >
              previous
              <span>👈</span>
            </Button>
            <Button
              backgroundColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
            >
              next
              <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
    // fragment elemnet in html
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3> {children}
    </div>
  );
}

function Button({ backgroundColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
