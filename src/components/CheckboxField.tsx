import Text from './Text'
import Checkbox from './Checkbox'
import type { CheckboxProps } from './Checkbox'

type CheckboxFieldProps = CheckboxProps & {
	children: string
}

export default function CheckboxField(props: CheckboxFieldProps) {
	const {
		id,
		name,
		title,
		checked,
		children,
		'aria-label': ariaLabel,
		onChange,
	} = props

	return (
		<div className='flex items-center gap-3'>
			<Checkbox
				id={id}
				name={name}
				title={title}
				checked={checked}
				aria-label={ariaLabel}
				onChange={onChange}
			/>
			<label
				htmlFor={id}
				className='cursor-pointer'
			>
				<Text>{children}</Text>
			</label>
		</div>
	)
}
