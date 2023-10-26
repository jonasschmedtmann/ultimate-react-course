function StartScreen({ numQustions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQustions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={()=>dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen
