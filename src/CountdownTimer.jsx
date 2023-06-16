import React, { useState, useEffect } from "react";
import BirthdayPage from "./BirthdayPage";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const remainingTime = calculateTimeRemaining();

      if (remainingTime.total <= 0) {
        clearInterval(timer);
        setCountdownFinished(true);
      } else {
        setTimeRemaining(remainingTime);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    );
    const timeDiff = midnight - now;

    const totalSeconds = Math.floor(timeDiff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      total: totalSeconds,
      hours: formatTime(hours),
      minutes: formatTime(minutes),
      seconds: formatTime(seconds),
    };
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  const estilo = {
    fontSize: "50px",
    margin: "25px",
  };

  const pastel = {
    fontSize: "40px",
    margin: "40px",
  };

  const titulo = {
    lineHeight: "1.5em",
    fontSize: "20px",
  };

  return (
    <div>
      <BirthdayPage />
    </div>
  );
};

export default CountdownTimer;
