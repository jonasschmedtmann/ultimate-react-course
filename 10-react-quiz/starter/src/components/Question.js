import Option from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer}></Option>
    </div>
  );
}

export default Question;
