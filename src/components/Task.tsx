import * as React from 'react'
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
    <div>
    <CheckboxField
      id={id}
      label={label}
      checked={checked}
      onChange={() => onCheckedChange(id)}
      aria-label={`${label} ${description}`}></CheckboxField>
    <div>
      {children}
    </div>
    </div>
  )
}
