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
		<header className="header">
			{isSmall && !open && (
				<button className="header__btn" onClick={() => handleSidebar()}>
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
			<div className="header__title">
				<a href="/#home">
					<h2 className="header__logo">EO</h2>
				</a>
				<p className="header__name">Eamonn O&apos;Sullivan</p>
			</div>
			{!isSmall && (
				<a href="/contact">
					<div className="header__contact">CONTACT</div>
				</a>
			)}
		</header>
	)
}
