function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🌕";
  if (percentage >= 80 && percentage < 100) emoji = "🌖";
  if (percentage >= 50 && percentage < 80) emoji = "🌓";
  else if (percentage >= 0 && percentage < 50) emoji = "🌚";
  return (
    <>
      <p className="result">
        Your scored<strong> {points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%) {emoji}
      </p>
      <p className="highscore">HighScore : {highscore}</p>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
