import { ReactNode } from 'react'

export default function StackIconTag({
	name,
	Icon,
}: {
	name: string
	Icon: ReactNode
}) {
	return (
		<span className="single-project__stack-tag">
			{Icon}
			{name}
		</span>
	)
}
