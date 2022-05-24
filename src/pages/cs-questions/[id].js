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
	const { answers, setanswers, stage, setstage, addStage, reduceStage, stageClass } = useContext(AnswersContext);


	const questionComponents = {
		0: <StartBtn onClick={addStage} className={stageClass[0]} />,
		1: <QuestionList questionNumber={1} className={stageClass[1]}
			questionText='岡山トヨペットでご購入いただいたきっかけを教えてください。' options={["オーナー", "紹介", "イベント", "来店", "その他",]}
		/>,
		2: <QuestionList questionNumber={2} className={stageClass[2]}
			questionText='店舗スタッフの親しみやすさ・相談しやすさ' options={["非常に満足", "満足", "どちらでもない", "不満", "非常に不満",]}
		/>,
		3: <QuestionList questionNumber={3} className={stageClass[3]}
			questionText='お客様ニーズにあった説明・提案' options={["非常に満足", "満足", "どちらでもない", "不満", "非常に不満",]}
		/>,
		4: <QuestionList questionNumber={4} className={stageClass[4]}
			questionText='説明や段取りが良く、スムーズな商談でしたか。' options={["非常に満足", "満足", "どちらでもない", "不満", "非常に不満",]}
		/>,
		5: <QuestionList questionNumber={5} className={stageClass[5]}
			questionText='お店全体での歓迎が感じられましたか。' options={["非常に満足", "満足", "どちらでもない", "不満", "非常に不満",]}
		/>,
		6: <QuestionList questionNumber={6} className={stageClass[6]}
			questionText='お店の利用しやすさ、清潔さ快適さはございましたか。' options={["非常に満足", "満足", "どちらでもない", "不満", "非常に不満",]}
		/>,
	}





	const [customerId, setcustomerId] = useState('');
	const router = useRouter();
	const id = router.query.id

	useEffect(() => {
		setcustomerId(id)
	}, [id]);




	const Questions = Object.keys(questionComponents).forEach(key => {
		return questionComponents[key]
	})

	if (stage === 7) {
		return <Confirmation />
	}



	return <Layout>
		<div className="p-8">
			<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-4  overflow-hidden">

				{/* {questionComponents["0"]}
				{questionComponents["1"]}
				{questionComponents["2"]} */}


				{Object.keys(questionComponents).map(key => {
					const component = questionComponents[key]
					if (stage.toString() === key) {
						return <div key={key}>{component}</div>

					}
				})}
			</div>
		</div>
	</Layout>

}
