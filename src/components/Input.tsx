import * as React from 'react'

type InputProps = {
	id: string
	name: string
	placeholder: string
	type?: 'text'
	value: string | number
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
	const { id, name, placeholder, type = 'text', value, onChange } = props
	return (
		<input
			placeholder={placeholder}
			id={id}
			name={name}
			type={type}
			value={value}
			onChange={onChange}
			autoComplete='off'
			className='block w-full text-gray-500 placeholder-gray-400 px-5 py-2.5 transition-all duration-200 border-none rounded-lg shadow-md outline-none focus:outline-none focus:ring focus:ring-blue-200'
		/>
	)
}
