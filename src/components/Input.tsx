import * as React from 'react'

type InputProps = {
	id: string
	name: string
	type?: 'text'
	value: string | number
	placeholder?: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
	const {
		id,
		name,
		type = 'text',
		value,
		placeholder,
		onChange,
	} = props

	return (
		<input
			id={id}
			name={name}
			type={type}
			value={value}
			placeholder={placeholder}
			autoComplete='off'
			className='block w-full bg-slate-800 text-gray-400 placeholder-gray-600 px-5 py-2.5 transition-all duration-200 border-none rounded-lg shadow-md outline-none focus:outline-none focus:ring-2 focus:ring-blue-200'
			onChange={onChange}
		/>
	)
}
