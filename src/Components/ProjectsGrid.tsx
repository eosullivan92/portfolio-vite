import React from 'react'
import Project from './Project'
import { projectData } from '../projectData'

export default function Projects() {
	return (
		<section className="projects-container" id="portfolio">
			<h2>A sample of my work...</h2>
			<div className="projects-grid">
				{projectData.map((project, i) => (
					<Project project={project} key={i} />
				))}
			</div>
		</section>
	)
}
