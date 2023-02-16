import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { SlMenu } from 'react-icons/sl'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { TfiClose } from 'react-icons/tfi'
import { IconContext } from 'react-icons'
import { useIsSmall } from '../Hooks/useMediaQuery'

type SidebarProps = {
	open: boolean
	handleSidebar: () => void
}

export default function Sidebar({ open, handleSidebar }: SidebarProps) {
	const isSmall = useIsSmall()

	const handleClose = () => {
		if (isSmall) handleSidebar()
	}

	return (
		<div className={open ? 'sidebar sidebar--open' : 'sidebar'}>
			<IconContext.Provider
				value={{ style: { fontSize: '1.7rem' }, color: '#072ac8' }}
			>
				<button
					className="sidebar__btn"
					onClick={() => handleSidebar()}
				>
					{open ? <TfiClose /> : <SlMenu />}
				</button>

				<ul className="sidebar__navigation">
					<li
						className={
							open
								? 'sidebar__nav-link sidebar__nav-link--visible'
								: 'sidebar__nav-link'
						}
					>
						<HashLink
							smooth
							to="/#hero"
							onClick={() => handleClose()}
						>
							Home
						</HashLink>
					</li>

					<li
						className={
							open
								? 'sidebar__nav-link sidebar__nav-link--visible'
								: 'sidebar__nav-link'
						}
					>
						<HashLink
							smooth
							to="/#portfolio"
							onClick={() => handleClose()}
						>
							Portfolio
						</HashLink>
					</li>
					<li
						className={
							open
								? 'sidebar__nav-link sidebar__nav-link--visible'
								: 'sidebar__nav-link'
						}
					>
						<Link to="/contact" onClick={() => handleClose()}>
							Contact
						</Link>
					</li>
				</ul>

				<div className="sidebar__social-icons">
					<a
						href="https://www.linkedin.com/in/eosullivan9/"
						target="_blank"
						rel="noreferrer"
					>
						<SiLinkedin />
					</a>

					<a
						href="https://github.com/eosullivan92"
						target="_blank"
						rel="noreferrer"
					>
						<SiGithub />
					</a>
				</div>
			</IconContext.Provider>
		</div>
	)
}
