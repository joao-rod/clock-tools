import { startTransition, useEffect, useState } from 'react';

import * as S from './style';
import { Header } from '../../components/Header';

export const Timer: React.FC = () => {
  const [hour, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [startTime, setStartTime] = useState(false);
  
  const handleStartTime = () => {
    if (!startTime)
      setStartTime(true)
    else
      setStartTime(false)
  }

  useEffect(() => {
    if (startTime) {
      setTimeout(() => {
        setMilliseconds(milliseconds + 1)
        if (milliseconds > 9) {
          setSeconds(seconds + 1);  
          setMilliseconds(0);
        } else if(seconds > 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        } else if (minutes > 59) {
          setHours(hour + 1);
          setMinutes(0);
        }
      }, 100);
    }
  }, [startTime, milliseconds]);

  return (
    <>
      <Header />
      <S.Content>
        <div>
          <h5>{String(hour).padStart(2, '0')}</h5>
          <h5>:</h5>
          <h5>{String(minutes).padStart(2, '0')}</h5> 
          <h6>{String(seconds).padStart(2, '0')}</h6>
          <h6>:</h6>
          <h6>{String(milliseconds).padStart(2, '0')}</h6>
        </div>
        <button onClick={handleStartTime}>play</button>
      </S.Content>
    </>
  );
}
