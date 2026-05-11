import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        //   console.log("tick");
        //   runs the callback function every 1 sec
        dispatch({ type: "tick" });
      }, 1000);
      //   cleanup function
      // every setInterval function returns an id. we cna use it to cleaar the interval
      return () => clearInterval(id);
    },
    [dispatch],
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
