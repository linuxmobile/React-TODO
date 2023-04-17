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
			className='text-blue-200 transition-all duration-200 border-gray-500 rounded outline-none cursor-pointer hover:border-gray-300 border-1 focus:ring-offset-1 focus:outline-none hover:text-blue-100 focus:ring focus:ring-blue-200'
		/>
	)
}
