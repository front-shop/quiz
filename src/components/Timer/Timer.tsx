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

    let timerId = setTimeout(function run() {
      if (sec === 0) {
        min -= 1;
        sec = 59;
        setMinutes(min);
      } else {
        sec -= 1;
      }

      if (min === 0 && sec === 0) {
        endTimer();
        clearTimeout(timerId);
      } else {
        timerId = setTimeout(run, 1000);
        intervalRef.current = timerId;
      }
      setSeconds(sec);
    }, 1000);
    intervalRef.current = timerId;
  };

  const clearTimer = () => {
    clearTimeout(intervalRef.current as NodeJS.Timeout);
  };

  const renderTime = (timePeriod: number) => (timePeriod > 9 ? timePeriod : `0${timePeriod}`);

  useEffect(() => {
    timer(time, finishedTimer);
    return () => clearTimer();
  }, []);

  return (
    <Typography variant="subtitle1" p={2} align='right'>
      <TimeBox>
        {renderTime(minutes)}
      </TimeBox>
      :
      <TimeBox>
        {renderTime(seconds)}
      </TimeBox>
    </Typography>
  );
};
export default Timer;
