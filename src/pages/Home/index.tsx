import { useEffect, useState } from 'react';

import { Header } from '../../components/Header/index';
import * as S from './style';

export const Home: React.FC = () => {
  const time = new Date();
  const [hour, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setHours(time.getHours());
      setMinutes(time.getMinutes());
      setSeconds(time.getSeconds());
      setMilliseconds(time.getMilliseconds());
    }, 10);
  }, [milliseconds, seconds]);

  return (
    <>
      <Header />
      <S.Content>
        <div>
          <h5>{String(hour).padStart(2, '0')}</h5>
          <h5>:</h5>
          <h5>{String(minutes).padStart(2, '0')}</h5> 
          <h6>{String(seconds).padStart(2, '0')}</h6>
        </div>
      </S.Content>
    </>
  )
}
