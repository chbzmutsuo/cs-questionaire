import React from 'react';
import { useState, useEffect, useContext, } from 'react'
import BtnBasic from "@components/common/BtnBasic"
import AnswersContext from "@contexts/AnswersContext"
import Center from '@components/common/Center';
import Image from 'next/image';

const QuestionList = (props) => {
	const { questionNumber, className } = props
	const [selectedAnswers, setselectedAnswers] = useState(-1);
	const { answers, setanswers, stage, setstage, addStage, reduceStage, stageClass } = useContext(AnswersContext);



	const addAnswer = (e) => {
		const innerText = e.target.innerText
		const choiceIndex = e.target.dataset.choiceIndex
		setselectedAnswers(choiceIndex)
		const newAnswers = answers
		newAnswers[questionNumber] = innerText
		setanswers(newAnswers)
		console.log(answers)   //////////
	}

	const options = props.options
	return (
		<div className={` ${className}`}>
			<p className='font-bold my-4  flex'>
				<div className='mr-4'><Image src={'/img/Chumaru_left.png'} alt='' width={60} height={80} /></div>
				{props.questionText}
			</p>

			<div className='flex flex-col text-center space-y-2 '>
				{options.map((option, index) => {
					return (
						<div className='p-1  ' key={index}>
							<button data-choice-index={index} style={{ minWidth: 80 }}
								className={` rounded-md p-2 w-60  bg-red-400 text-white ${answers[questionNumber] === option ? 'opacity-100' : 'opacity-60'}`}
								onClick={addAnswer}
							>{option}
							</button>
						</div >

					)
				})}
			</div>

			<Center>
				<div className="flex flex-row space-x-8 justify-around my-4">
					{stage !== 0 && <BtnBasic className="bg-red-400 text-white" onClick={reduceStage} >戻る</BtnBasic>}



					<BtnBasic className={`bg-blue-400 text-white ${answers[stage] == undefined ? 'pointer-events-none opacity-30' : ''}`} onClick={addStage} >次へ</BtnBasic>




				</div>
			</Center>





		</div>
	);
}

export default QuestionList;
