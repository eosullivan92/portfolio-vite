import { useState, useEffect } from 'react'

export const useIsSmall = () => useMediaQuery('(max-width: 600px)')

export function useMediaQuery(query: string) {
	const [matches, setMatches] = useState<boolean>(false)

	useEffect(() => {
		const media = window.matchMedia(query)
		if (media.matches !== matches) {
			setMatches(media.matches)
		}
		const listener = () => {
			setMatches(media.matches)
		}
		media.addListener(listener)
		return () => media.removeListener(listener)
	}, [matches, query])

	return matches
}
