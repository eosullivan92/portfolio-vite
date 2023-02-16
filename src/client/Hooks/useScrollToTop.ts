import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type ScrollProps = {
	children: React.ReactNode // 👈️ type children
}

export default function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}
