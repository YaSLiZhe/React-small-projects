import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, index, answer, dispatch } = useQuiz();
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {questions[index].options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswer ? (i === questions[index].correctOption ? "correct" : "wrong") : ""
          }`}
          key={option}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
