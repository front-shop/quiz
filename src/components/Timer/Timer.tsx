import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@mui/material';
import { TimeBox } from './styled';

type TimerProps = {
  time: number;
  finishedTimer: () => void;
};

const Timer = ({ time, finishedTimer }: TimerProps) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const timer = (timeInMinutes: number, endTimer: () => void) => {
    let sec: number = 0;
    let min: number = timeInMinutes;

    const timerId = setInterval(() => {
      if (sec === 0) {
        min -= 1;
        sec = 59;
        setMinutes(min);
      } else {
        sec -= 1;
      }

      if (min === 0 && sec === 0) {
        endTimer();
        clearInterval(timerId);
      }
      setSeconds(sec);
    }, 1000);
    intervalRef.current = timerId;
  };

  const clearTimer = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
  };

  useEffect(() => {
    timer(time, finishedTimer);
    return () => clearTimer();
  }, []);

  return (
    <Typography variant="subtitle1" p={2} align='right'>
      <TimeBox>
        {minutes > 9 ? minutes : `0${minutes}`}
      </TimeBox>
      :
      <TimeBox>
        {seconds > 9 ? seconds : `0${seconds}`}
      </TimeBox>
    </Typography>
  );
};
export default Timer;
