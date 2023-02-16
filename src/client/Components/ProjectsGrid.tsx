import Project from './Project'
import { projectData } from '../../projectData'

export default function Projects() {
	return (
		<section className="projects" id="portfolio">
			<h2 className="projects__title">A sample of my work...</h2>
			<div className="projects__grid">
				{projectData.map((project, i) => (
					<Project project={project} key={i} />
				))}
			</div>
		</section>
	)
}
