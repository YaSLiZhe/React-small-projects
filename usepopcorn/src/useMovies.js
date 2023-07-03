import { useState, useEffect } from "react";
const KEY = "93f44850";
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal });

          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }
          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("Movie not found!");
          }
          setMovies(data.Search);

          setError("");
        } catch (err) {
          if (err.message !== "AbortError") {
            setError(err);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleClose();
      fetchMovies();
      // return () => {
      //   controller.abort();
      // };
    },
    [query]
  );
  return { movies, error, isLoading };
}
