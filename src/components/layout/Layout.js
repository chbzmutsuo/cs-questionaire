import Image from 'next/image';
import React from 'react'

export default function Layout({ children }) {
	const headerFooterHeight = "";
	return (<div className='overflow-hidden'>
		<header className={`h-10 w-full text-center z-10 border-b-2 `}>
			<nav className='h-full'>
				<div className='w-full '><Image src={'/img/logo.png'} alt='' width={300} height={40} layout='fixed' /></div>

			</nav>
		</header>

		<main className={`min-h-screen  h-full bg-gray-100 `}>{children}</main>

		<footer className={`h-10    w-full text-center z-10 bg-green-700`}>
			Footer
		</footer>

		{/* test */}
	</div >
	)
}
