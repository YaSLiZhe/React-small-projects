import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  if (answer === null) return null;
  if (index + 1 < numQuestions)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "nextQuestion" })}>
        Next Question
      </button>
    );
  if (index + 1 === numQuestions)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "finished" })}>
        End
      </button>
    );
}

export default NextButton;
