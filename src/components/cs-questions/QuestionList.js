import React from 'react';
import { useState, useEffect, useContext } from 'react';
import BtnBasic from '@components/common/BtnBasic';
import AnswersContext from '@contexts/AnswersContext';
import Center from '@components/common/Center';
import Image from 'next/image';

const QuestionList = (props) => {
	const { questionNumber, className } = props;
	const [selectedAnswers, setselectedAnswers] = useState(-1);
	const { stage, setstage, addStage, reduceStage, stageClass, questions, setquestions, } = useContext(AnswersContext);

	const addAnswer = (e) => {
		const innerText = e.target.innerText;
		const choiceIndex = e.target.dataset.choiceIndex;
		setselectedAnswers(choiceIndex);

		const newQuestionArray = questions

		let answeredQuestion = newQuestionArray[questionNumber]
		answeredQuestion.answer = innerText
		setquestions(newQuestionArray)
		console.log(questions)   //////////

		// const newAnswers = answers;
		// newAnswers[questionNumber] = innerText;
		// setanswers(newAnswers);
		// console.log(answers); //////////
	};

	const options = props.options;
	return (
		<div className={` ${className}`}>
			<div className='flex flex-wrap items-center alert alert-success m-2 p-1'>
				<div className='w-2/12'><Image src={'/img/Chumaru_left.png'} alt='' width={40} height={60} /></div>
				<div className='w-10/12'>
					<p className=' font-bold my-4 text-left text-sm   '>
						{props.questionText}</p>
				</div>
				{/* <div className='w-2/12'></div> */}
			</div>

			<div className='flex flex-col text-center space-y-2 '>
				{options.map((option, index) => {
					return (
						<div className='p-1   ' key={index}>
							<button
								data-choice-index={index}
								style={{ minWidth: 80 }}
								className={` rounded-md p-2 w-60 font-bold bg-yellow-400 text-dark ${questions[questionNumber].answer === option ? 'opacity-100' : 'opacity-40'
									}`}
								onClick={addAnswer}
							>
								{option}
							</button>
						</div>
					);
				})}
			</div>

			<Center>
				<div className='flex flex-row space-x-8 justify-around my-4'>
					{stage !== -1 && (
						<BtnBasic className='bg-red-400 text-white' onClick={reduceStage}>
							戻る
						</BtnBasic>
					)}

					<BtnBasic
						className={`bg-blue-400 text-white ${questions[questionNumber].answer == "" ? 'pointer-events-none opacity-30' : ''}`}
						onClick={addStage}
					>
						次へ
					</BtnBasic>
				</div>
			</Center>
		</div>
	);
};

export default QuestionList;
