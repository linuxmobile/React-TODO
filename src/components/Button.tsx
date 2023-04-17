import * as React from 'react'
import Text from './Text'

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset'
	title: string
	children: string
	disabled?: boolean
	onClick: (event: React.MouseEvent<HTMLButtonElementm, MouseEvent>) => void
}

export default function Button(props: ButtonProps) {
	const { type = 'button', title, children, disabled, onClick } = props
	return (
		<button
			type={type}
			title={title}
			disabled={disabled}
			onClick={onClick}
			className='transition-all transform scale-100 duration-200 px-10 py-2.5 lowercase bg-white rounded-lg shadow-md outline-none focus:outline-none focus:ring focus:ring-blue-200 active:shadow active:scale-95'
		>
			<Text>{children}</Text>
		</button>
	)
}
