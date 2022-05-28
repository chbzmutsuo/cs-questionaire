import '@styles/globals.css';
import '@styles/tailwind.css';
import animateStyle from '@styles/animation.module.scss';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswersContext from '@contexts/AnswersContext';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import questionsData from '../../data/questions';
function MyApp({ Component, pageProps }: AppProps) {
  const [questions, setquestions] = useState(questionsData);

  const [customerId, setcustomerId] = useState(-1);
  const [stage, setstage] = useState(-1);
  const [stageClass, setstageClass] = useState({});
  const addStage = () => {
    // stageClass[stage] = animateStyle.disapperToLeft
    stageClass[stage + 1] = animateStyle.appearFromRight;
    setstage((prev) => prev + 1);
    console.log({ stage }); //////////
  };

  const reduceStage = () => {
    // stageClass[stage] = animateStyle.disapperToRight
    stageClass[stage - 1] = animateStyle.apperFromLeft;
    setstage((prev) => prev - 1);
  };

  const value = {
    customerId,
    setcustomerId,

    stageClass,
    stage,
    setstage,
    addStage,
    reduceStage,

    questions,
    setquestions,
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
