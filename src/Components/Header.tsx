import React from 'react'
import { useIsSmall } from '../Hooks/useMediaQuery'
import { SlMenu } from 'react-icons/sl'
import { TfiClose } from 'react-icons/tfi'
import { IconContext } from 'react-icons'

type SidebarProps = {
	open: boolean
	handleSidebar: () => void
}

export default function Header({ open, handleSidebar }: SidebarProps) {
	const isSmall = useIsSmall()
	return (
		<header className="horizontal-header">
			{isSmall && !open && (
				<button onClick={() => handleSidebar()}>
					<IconContext.Provider
						value={{
							style: { fontSize: '1.7rem' },
							color: '#072ac8',
						}}
					>
						{open ? <TfiClose /> : <SlMenu />}
					</IconContext.Provider>
				</button>
			)}
			<div className="title-container">
				<a href="/#home">
					<h2 className="logo-title">EO</h2>
				</a>
				<p className="name-title">Eamonn O&apos;Sullivan</p>
			</div>
			{!isSmall && (
				<a href="/contact">
					<div className="block-text">CONTACT</div>
				</a>
			)}
		</header>
	)
}
