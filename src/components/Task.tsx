import * as React from 'react'
import { motion } from 'framer-motion'
import CheckboxField from './CheckboxField'

type TaskProps = {
	children: React.ReactNode
	id: string
	description: string
	checked: boolean
	onCheckedChange: (id: string) => void
}

export default function Task(props: TaskProps) {
	const { children, id, description, checked, onCheckedChange } = props

	const label = checked ? 'undo task' : 'completed task'

	return (
		<motion.li
			layout
			variants={{
				hidden: {
					y: 50,
					opacity: 0,
				},
				show: {
					y: 0,
					opacity: 1,
					transition: {
						duration: 0.4,
						ease: [0.6, -0.05, 0.01, 0.99],
					},
				},
				out: {
					y: 50,
					opacity: 0,
					transition: {
						duration: 0.4,
						ease: [0.6, -0.05, 0.01, 0.99],
					},
				},
			}}
			style={{ gridTemplateColumns: 'auto min-content' }}
			className='group grid items-center w-full gap-2 px-3 py-2.5 bg-white'
		>
			<div>
				<CheckboxField
					id={id}
					label={label}
					checked={checked}
					onChange={() => onCheckedChange(id)}
					aria-label={`${label} ${description}`}
				>
				</CheckboxField>
				<div className='transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-focus:opacity-100 focus-within:opacity-100'>
					{children}
				</div>
			</div>
		</motion.li>
	)
}
