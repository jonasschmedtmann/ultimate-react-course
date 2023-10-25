import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],

  // "loading", "error", "ready", "active", "finish"
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  const question = state.questions.at(state.index);
  const actionType = {
    dataReceived: (state, action) => {
      return { ...state, questions: action.payload, status: "ready" };
    },
    dataFailed: (state, _) => {
      return { ...state, status: "error" };
    },
    start: (state, _) => {
      return { ...state, status: "active" };
    },
    newAnswer: (state, action) => {
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    },
    
  };
  return actionType[action.type](state, action);
}
export default function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQustions = questions.length;
  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    getQuestions();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQustions={numQustions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
}
