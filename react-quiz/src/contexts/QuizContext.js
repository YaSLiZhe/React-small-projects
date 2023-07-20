import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useReducer } from "react";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  remainTime: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "active":
      return { ...state, status: "active", remainTime: state.questions.length * 30 };
    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return {
        ...state,
        status: "finished",
        highscore: state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...state,
        status: "restart",
        index: 0,
        points: 0,
        answer: null,
        remainTime: state.questions.length * 30,
      };
    case "tick":
      return {
        ...state,
        remainTime: state.remainTime - 1,
        status: state.remainTime === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action Unknown");
  }
}

const QuizContext = createContext();
function QuizProvider({ children }) {
  const [{ questions, status, index, answer, points, highscore, remainTime }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((pre, cur) => pre + cur.points, 0);

  useEffect(() => {
    fetch("http://localhost:3001/api/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        remainTime,
        numQuestions,
        maxPossiblePoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  if (useContext(QuizContext) === undefined) {
    throw new Error("use it outside Provider");
  }
  return useContext(QuizContext);
}

export { QuizProvider, useQuiz };
