import * as React from 'react'
import Text from './Text'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  title: string
  children: string
  disabled?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElementm, MouseEvent>) => void
}

export default function Button (props: ButtonProps) {
  const { type = 'button', title, children, disabled, onClick } = props
  return (
    <button
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
    >
      <Text>{children}</Text>
    </button>
  )
}
