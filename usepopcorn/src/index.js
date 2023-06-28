import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxStars={10} onSetRating={setMovieRating} />
//       <p>This movie is rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxStars={5} message={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating maxStars={5} size={25} color="blue" defaultRating={2} />
    <Test /> */}
  </React.StrictMode>
);
