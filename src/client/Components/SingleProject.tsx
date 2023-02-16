import { useParams, useNavigate } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { projectData } from '../../projectData'
import { RxArrowRight } from 'react-icons/rx'
import StackIconTag from './StackIconTag'

type StackObject = {}

export default function SingleProject() {
	const navigate = useNavigate()
	const { id } = useParams()
	const project = projectData.find((project) => project.id === Number(id))

	const handleNextProject = () => {
		if (id) {
			if (Number(id) < 4) {
				navigate(`/portfolio/${Number(id) + 1}`)
			} else {
				navigate(`/portfolio/1`)
			}
		}
	}

	return (
		<>
			{project && (
				<div className="single-project">
					<div className="single-project__header-flex">
						<div className="single-project__header">
							<h3 className="single-project__title">
								{project.name}
							</h3>
							<p className="single-project__subtitle">
								{project.subtitle}
							</p>
							<a
								href={project.link}
								className="single-project__project-url"
								target="_blank"
								rel="noreferrer"
							>
								{project.link}
							</a>
						</div>
						<button
							className="single-project__btn-next"
							aria-label="next project"
							onClick={() => handleNextProject()}
						>
							Next Project
							<RxArrowRight />
						</button>
					</div>
					<div className="single-project__project-flex">
						<div className="single-project__image-container">
							<picture>
								<source
									srcSet={project.screenshot}
									media="(min-width: 600px)"
								/>
								<img
									src={
										project.screenshotmobile ||
										project.screenshot
									}
									alt="project screenshot"
									decoding="async"
									loading="lazy"
									className={
										Number(id) == 4
											? 'single-project__image plantasia-img'
											: 'single-project__image'
									}
								/>
							</picture>
						</div>
						<div className="single-project__stack">
							<IconContext.Provider
								value={{
									style: {
										fontSize: '2.5rem',
										color: '#072ac8',
									},
								}}
							>
								{Object.keys(project.stack).map((key) => {
									return (
										<StackIconTag
											key={key}
											name={key}
											Icon={
												project.stack[
													key as keyof StackObject
												]
											}
										/>
									)
								})}
							</IconContext.Provider>
						</div>
						<div className="single-project__info">
							<p className="single-project__info-item">
								{project.description}
							</p>

							<div className="single-project__info-item">
								<span className="bold">Github:</span>{' '}
								<a
									href={project.repository}
									target="_blank"
									rel="noreferrer"
								>
									{project.repository}
								</a>
							</div>

							<p className="bold single-project__info-item">
								Reflection:
							</p>
							<ul className="single-project__reflections-list">
								{project.reflections.map((reflection, i) => (
									<li
										className="single-project__reflection"
										key={i}
									>
										{reflection}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
