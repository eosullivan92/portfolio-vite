import { IconContext } from 'react-icons'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { HiOutlineDocumentDownload, HiCode } from 'react-icons/hi'

export default function SocialLinks() {
	return (
		<>
			<div className="hero__social">
				<IconContext.Provider
					value={{ style: { fontSize: '1.5rem' }, color: '#072ac8' }}
				>
					<a
						href="https://www.linkedin.com/in/eosullivan9/"
						target="_blank"
						rel="noreferrer"
					>
						<div className="hero__social-item">
							<SiLinkedin />
							<p>linkedin/eosullivan9</p>
						</div>
					</a>

					<a
						href="https://github.com/eosullivan92"
						target="_blank"
						rel="noreferrer"
					>
						<div className="hero__social-item">
							<SiGithub />
							<p>github/esosullivan92</p>
						</div>
					</a>
					<a
						href="/EamonnOsullivan-CV.pdf"
						download="Eamonn O'Sullivan CV"
					>
						<div className="hero__social-item">
							<HiOutlineDocumentDownload />
							<p>Download CV</p>
						</div>
					</a>
					<a
						href="https://github.com/eosullivan92/portfolio"
						target="_blank"
						rel="noreferrer"
					>
						<div className="hero__social-item">
							<HiCode />

							<p>Source Code</p>
						</div>
					</a>
				</IconContext.Provider>
			</div>
		</>
	)
}
