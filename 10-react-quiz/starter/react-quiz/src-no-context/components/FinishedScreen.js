function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = maxPossiblePoints ? (points / maxPossiblePoints) * 100 : 0;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "☹️";
  if (percentage === 0) emoji = "🙅";

  return (
    <div className="result">
      <p>
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)}% )
      </p>
      <p className="highscore">{`highScore: ${highScore} points`}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        reset
      </button>
    </div>
  );
}

export default FinishedScreen;
