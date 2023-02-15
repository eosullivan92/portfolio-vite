import React from 'react'
import { useNavigate } from 'react-router-dom'

type Project = {
	id: number
	name: string
	subtitle: string
	link: string
	screenshot: string
	screenshotmobile: string | null
	repository: string
	stack: {}
	description: string
	reflections: string[]
}

type ProjectProps = {
	project: Project
}

export default function Project({ project }: ProjectProps) {
	const navigate = useNavigate()

	const handleNavigate = (id: number) => {
		navigate(`/portfolio/${id}`)
	}

	const handleKeyDownNavigate = (
		e: React.KeyboardEvent<HTMLElement>,
		id: number
	) => {
		if (e.keyCode === 13) {
			navigate(`/portfolio/${id}`)
		}
	}

	return (
		<div
			role="button"
			className="project"
			onClick={() => handleNavigate(project.id)}
			onKeyDown={(e) => handleKeyDownNavigate(e, project.id)}
			tabIndex={0}
		>
			<h3 className="project-name">{project.name}</h3>
			<p className="project-subtitle">{project.subtitle}</p>
			<a href={project.link} className="project-url">
				{project.link}
			</a>
			<picture className="image-container">
				<source
					srcSet={project.screenshot}
					media="(min-width: 600px)"
				/>
				<img
					src={project.screenshotmobile || project.screenshot}
					alt="project screenshot"
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</div>
	)
}
