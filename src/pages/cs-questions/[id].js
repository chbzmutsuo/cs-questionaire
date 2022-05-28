import Layout from "@components/layout/Layout"
import Center from "@components/common/Center"
import { useRouter } from 'next/router';
import React from 'react';
import BtnBasic from "@components/common/BtnBasic"
import { useState, useEffect, useContext } from 'react';
import StartBtn from "@components/cs-questions/StartBtn"
import animateStyle from "@styles/animation.module.scss"
import QuestionList from "@components/cs-questions/QuestionList"
import AnswersContext from "@contexts/AnswersContext";
import Confirmation from "@components/cs-questions/Confirmation"


export default function QuestionHome() {
	const { stage, setstage, addStage, reduceStage, stageClass, questions, setquestions, customerId, setcustomerId, } = useContext(AnswersContext);



	const router = useRouter();
	const id = router.query.id
	useEffect(() => {
		setcustomerId(id)

	}, [id, setcustomerId]);




	const questionsCompo = questions.map((questions, index) => {
		if (index === stage)
			return <QuestionList key={index} questionNumber={index} className={stageClass[index]}
				questionText={questions.question} options={questions.choices} />

	})


	const test = () => {
		const res = fetch("/api/google-sheets-api").then(res => res.json()).then(data => {
			console.log(data)   //////////
		}).catch(error => {
			console.error(error)   //////////
		});
	}

	/**既に得られた回答の個数を確かめている */
	const answersCount = questions.map(question => {
		const { answer } = question
		if (answer !== '') { return answer }
	}).filter(answer => answer).length
	console.log(answersCount, questions.length)   //////////



	if (stage === questions.length) {
		return <Confirmation />
	}

	return < Layout >
		{/* <BtnBasic onClick={test}>TEST</BtnBasic> */}
		<div className="p-2" >
			{stage === -1 && <StartBtn onClick={addStage} className={stageClass[0]} />}
			{questionsCompo}

			{answersCount === questions.length && <BtnBasic onClick={() => setstage(questions.length)}> 全ての回答を確認</BtnBasic>}
		</div >
	</Layout >

}
