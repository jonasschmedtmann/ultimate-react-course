import { useState, useEffect } from "react";

const key = "c6f9f6d0&s";

export function useMovies(query, callback) {
  // use movies is a function and not a compoenent . so it acceots params adn not props
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // use named functions for custom hooks and default functions onrmal compoennets
  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading((loading) => (loading = true));
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal },
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False")
            throw new Error("cannot find the movie");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          // console.error(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading((loading) => (loading = false));
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort(); // for each render this clean up function is called
      };
    },
    [query],
  );
  return { movies, isLoading, error };
}
