import React from 'react'
import BtnBasic from '@components/common/BtnBasic';
import Center from '@components/common/Center'
import { useRouter } from 'next/router';

export default function Index() {
	const router = useRouter()

	const locateQuestionaire = () => {
		router.push(router.pathname + '')


	}
	const locateServiceMaintanance = () => {

	}
	const locateCarTryOutAgreement = () => {

	}


	return (
		<Center>
			<div >
				<h1 className='my-4'>アプリを選んでください</h1>
				<div className='flex flex-col'>
					<BtnBasic className="w-64 text-lg font-bold bg-green-600 text-white"
						onClick={locateQuestionaire}
					>
						新規来店アンケート
					</BtnBasic>
					<BtnBasic className="w-64 text-lg font-bold bg-yellow-600 text-white"
						onClick={locateServiceMaintanance}
					>
						新規サービスメンテナンス
					</BtnBasic>
					<BtnBasic className="w-64 text-lg font-bold bg-blue-600 text-white"
						onClick={locateCarTryOutAgreement}
					>
						試乗車同意確認
					</BtnBasic>
				</div >
			</div>
		</Center>
	)
}
