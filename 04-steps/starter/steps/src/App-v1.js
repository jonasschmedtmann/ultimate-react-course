import { useState } from "react";

const message = ["learn react *", "apply for jobs ", "invest your new income"];
export default function App() {
  return (
    <div>
      <Steps />

      <Steps />
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
          <p className="message">
            Step {step}:{message[step - 1]} {test.name}
          </p>

          {/* <p className="message">hello</p> */}
          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={
                //   () => {
                //   alert("previous");
                // }
                handlePrevious
              }
            >
              previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
    // fragment elemnet in html
  );
}
