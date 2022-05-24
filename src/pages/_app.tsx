import '@styles/globals.css';
import '@styles/tailwind.css';
import animateStyle from '@styles/animation.module.scss';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswersContext from '@contexts/AnswersContext';
import { useState, useEffect, useContext } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [answers, setanswers] = useState({});
  const [stage, setstage] = useState(0);

  const [stageClass, setstageClass] = useState({});
  const addStage = () => {
    // stageClass[stage] = animateStyle.disapperToLeft
    stageClass[stage + 1] = animateStyle.appearFromRight;
    setstage((prev) => prev + 1);
  };

  const reduceStage = () => {
    // stageClass[stage] = animateStyle.disapperToRight
    stageClass[stage - 1] = animateStyle.apperFromLeft;
    setstage((prev) => prev - 1);
  };

  useEffect(() => {}, [answers]);

  const value = {
    answers,
    setanswers,

    stageClass,
    stage,
    setstage,
    addStage,
    reduceStage,
  };
  return (
    <>
      <AnswersContext.Provider value={value}>
        <Component {...pageProps} />
      </AnswersContext.Provider>
    </>
  );
}

export default MyApp;
