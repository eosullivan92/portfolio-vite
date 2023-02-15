import HeroImage from './HeroImage'
import SocialLinks from './SocialLinks'

export default function AboutMe() {
	return (
		<>
			<section className="hero-container" id="home">
				<div className="hero-content">
					<h1 className="title">Eamonn O&apos;Sullivan</h1>
					<h3 className="subtitle">Web Developer</h3>

					<div className="about">
						<p>
							Welcome to my website. This is a space for me to
							shamelessly show off my skills and the projects that
							have been keeping me busy.{' '}
						</p>

						<p>
							I&apos;m a Kiwi professional with 5 years of
							Business Development experience in the Travel &
							Tourism industry. I began my Web Development journey
							in 2021, eager to make use of the COVID downtime,
							however what started as a hobby quickly turned into
							a passion. Fast forward to the present and I am now
							a graduate of Dev Academy Aotearoa with over a year
							and a half of Web Development experience under my
							belt, and ready to help you with your next website
							or application.
						</p>
						<p>
							Currently open to new opportunities so feel free to
							download my CV or contact me via the form below.
						</p>
					</div>
					<SocialLinks />
				</div>
				<HeroImage />
			</section>
		</>
	)
}
