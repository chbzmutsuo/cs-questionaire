import BtnBasic from '@components/common/BtnBasic';
import Center from '@components/common/Center';
import Layout from '@components/layout/Layout';
import AnswersContext from '@contexts/AnswersContext';
import { useRouter } from 'next/router';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Badge, ListGroup } from 'react-bootstrap';

export default function Confirmation() {
  const router = useRouter();
  const { stage, setstage, addStage, reduceStage, stageClass, questions, setquestions } = useContext(AnswersContext);

  const redirectToQuestion = (e) => {
    const Number = parseInt(e.target.dataset['questionNumber']);
    console.log(stage); //////////
    setstage(Number);
  };

  const sendForm = (e) => {
    const confirmed = confirm('回答を送信します。よろしいですか？');
    if (confirmed) {
      console.log('data送信'); //////////
      const body = { answers: {} };
      const answerList = questions.forEach((question) => {
        const { answer, question: title } = question;
        body.answers[title] = answer;
      });

      console.log(answerList); //////////
      fetch('http://localhost:3000/api/google-sheets-api', {
        method: 'POST',
        body: JSON.stringify(body),
      });
    }
  };

  const Q_A_CONFIRMATION = (
    <ListGroup as='ol' numbered>
      {questions.map((item, index) => {
        const { question, answer } = item;
        return (
          <div key={index}>
            <ListGroup.Item as='li' className='d-flex  p-1 justify-content-between align-items-start text-left'>
              <div className='ms-2 w-full'>
                <div className='fw-bold text-xs'>{question}</div>

                <div className='my-2'>
                  <div className=''>
                    <span
                      data-question-number={index}
                      className=' underline font-bold text-blue-400  underline-offset-2 p-2'
                      onClick={redirectToQuestion}
                    >
                      {answer}
                    </span>
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          </div>
        );
      })}
    </ListGroup>
  );

  return (
    <Layout>
      <div className='p-2'>
        <p className='alert alert-warning'>回答をご確認ください</p>
        <p className='text-xs text-gray-400'>クリックで各項目に再回答できます</p>

        {Q_A_CONFIRMATION}

        <BtnBasic onClick={sendForm}>送信する</BtnBasic>
      </div>
    </Layout>
  );
}
