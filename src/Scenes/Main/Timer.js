import { useState, useEffect } from 'react';
import prettyPrintTimer from "./../../Helpers";

function Timer({timerSettings}) {
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {

    if (seconds > 0 && timerSettings.timerState === 1) {

      const timerId = setInterval(() => {

        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timerId); 
    }

    if (seconds == 0) {

      timerSettings.setTimerState(2);

    }

  }, [timerSettings.timerState, seconds, timerSettings.setTimerState]);

  return (<>
    <p style={{
      position: "absolute",
      top: "-10vh",
      left: "35vw",
      fontSize: "10vh"
    }}>{prettyPrintTimer({seconds})}</p>
  </>)
}

export default Timer;