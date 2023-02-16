import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import AboutMe from './Components/Hero'
import Projects from './Components/ProjectsGrid'
import Contact from './Components/Contact'
import Sidebar from './Components/Sidebar'
import SingleProject from './Components/SingleProject'
import ScrollToTop from './Hooks/useScrollToTop'

function App() {
	const [open, setOpen] = useState(false)

	const handleSidebar = () => {
		setOpen((prev) => !prev)
	}

	return (
		<div className={`container`}>
			<Sidebar open={open} handleSidebar={handleSidebar} />
			<div className={open ? 'content content--pushed' : 'content'}>
				<Header open={open} handleSidebar={handleSidebar} />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<AboutMe />
								<Projects />
							</>
						}
					/>
					<Route path="/portfolio" element={<Projects />} />
					<Route
						path="/portfolio/:id"
						element={
							<>
								<ScrollToTop />
								<SingleProject />
							</>
						}
					/>
					<Route path="/about" element={<AboutMe />} />
					<Route path="/contact" element={<Contact />} />
					<Route
						path="*"
						element={
							<>
								<AboutMe />
								<Projects />
							</>
						}
					/>
				</Routes>
			</div>
		</div>
	)
}

export default App
