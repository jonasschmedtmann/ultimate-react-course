import { useEffect } from "react";
export function useKey(action, key) {
  useEffect(
    function () {
      function callback(e) {
        //callback function with event listener
        if (e.code.toLowerCase() === key.toLowerCase()) action();
      }
      // using useEffect to communicate with external events
      document.addEventListener("keydown", callback);
      // if we have more number of movie dey=tails being closed then it will add more event listeners to the lsit
      return function () {
        document.removeEventListener("keydown", callback);
        //if we are removing a specific type of event listener then the same function should be given as a call back for the removeEVentListener too
      };
    },
    [action, key],
  );
}
