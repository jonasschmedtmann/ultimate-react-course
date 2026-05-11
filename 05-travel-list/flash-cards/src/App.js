import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "how to give components",
    answer: "use state hook",
  },
  {
    id: 2,
    question:
      "what do we call an input element that is completely synchronised",
    answer: "controlled elements",
  },
  {
    id: 3,
    question: "what are states",
    answer:
      "state is a internal data that is created and modified isnide the component function",
  },
  {
    id: 4,
    question: "what are props",
    answer:
      "props are external data passed from one parent component to another.",
  },
  {
    id: 5,
    question: "why react adn why not valilla js",
    answer: "react has teh concept of rerendering",
  },
];

export default function App() {
  //parent component that includes all the otehr components
  return (
    <div>
      <Flashcards />
    </div>
  );
}
function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
    //if selected questions id is equal to the selected id then deselect it. as it has been already selected
    //if the selected questions id is not equal to the selected id then select it
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
