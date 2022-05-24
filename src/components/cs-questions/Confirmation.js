import BtnBasic from '@components/common/BtnBasic';
import Center from '@components/common/Center';
import Layout from '@components/layout/Layout'
import React from 'react'
import { useState, useEffect, useContext, } from 'react'


export default function Confirmation() {
	return (
		<Layout>
			<Center>

				<p>回答をご確認ください</p>



				<BtnBasic>送信する</BtnBasic>



			</Center>
		</Layout>
	)
}
