import * as React from 'react'

export type CheckboxProps = {
	id: string
	name: string
	title: string
	checked: boolean
	'aria-label': string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox(props: CheckboxProps) {
	const { id, name, title, checked, 'aria-label': ariaLabel, onChange } = props

	return (
		<input
			id={id}
			name={name}
			type='checkbox'
			title={title}
			checked={checked}
			aria-label={ariaLabel}
			onChange={onChange}
		/>
	)
}
