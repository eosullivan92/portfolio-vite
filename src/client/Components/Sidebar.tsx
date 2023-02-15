import { Link } from 'react-router-dom'
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
		<div className={open ? 'sidebar sidebar-open' : 'sidebar'}>
			<IconContext.Provider
				value={{ style: { fontSize: '1.7rem' }, color: '#072ac8' }}
			>
				<button onClick={() => handleSidebar()}>
					{open ? <TfiClose /> : <SlMenu />}
				</button>

				<ul className="navigation">
					<li
						className={
							open ? 'nav-link nav-link-visible' : 'nav-link'
						}
					>
						<Link to="/" onClick={() => handleClose()}>
							Home
						</Link>
					</li>

					<li
						className={
							open ? 'nav-link nav-link-visible' : 'nav-link'
						}
					>
						<Link to="/" onClick={() => handleClose()}>
							Portfolio
						</Link>
					</li>
					<li
						className={
							open ? 'nav-link nav-link-visible' : 'nav-link'
						}
					>
						<Link to="/contact" onClick={() => handleClose()}>
							Contact
						</Link>
					</li>
				</ul>

				<div className="social-icons">
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
