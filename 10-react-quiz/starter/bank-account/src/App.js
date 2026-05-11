import { act, useEffect, useReducer } from "react";
const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  hasLoan: false,
  canClose: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 500, loan: 0, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "requestLoan":
      return {
        ...state,
        balance: state.balance + action.payload,
        hasLoan: true,
        loan: action.payload,
      };
    case "payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,

        loan: 0,
        hasLoan: action.payload === state.loan ? true : false,
      };
    case "closeAccount":
      return { ...initialState };
    default:
      throw new Error("this is not what is expected");
  }
}
function App() {
  const [{ balance, loan, isActive, hasLoan, canClose }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <div className="App">
      <h1>useReducer bank account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "deposit", payload: 150 });
          }}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "withdraw", payload: 50 });
          }}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "requestLoan", payload: 5000 });
          }}
          disabled={hasLoan || !isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            let repay = +prompt("how much would you like to pay:");
            dispatch({ type: "payLoan", payload: repay });
          }}
          disabled={!isActive}
        >
          Pay Loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={!isActive || hasLoan || balance !== 0}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

export default App;
