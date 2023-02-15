import React, { ReactNode } from 'react'

export default function StackIconTag({
	name,
	Icon,
}: {
	name: string
	Icon: ReactNode
}) {
	return (
		<span className="stack-tag">
			{Icon}
			{name}
		</span>
	)
}
