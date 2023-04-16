import Text from './Text'
import Checkbox from './Checkbox'
import type { CheckboxProps } from './Checkbox'

type CheckboxFieldProps = CheckboxProps & {
  children: string
}

export default function CheckboxField(props: CheckboxFieldProps) {
  const { id, name, title, checked, 'aria-label': ariaLabel, children, onChange } = props

  return (
    <div>
      <Checkbox
        id={id}
        name={name}
        title={title}
        checked={checked}
        aria-label={ariaLabel}
        onChange={onChange}
      >
      <label htmlFor={id}></label>
      <Text>{children}</Text>
      </Checkbox>
    </div>
  )
}
