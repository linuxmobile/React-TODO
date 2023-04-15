type InputProps = {
  id: string
  name: string
  placeholder: string
  type?: 'text'
  value: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
  const { id, name, placeholder, type = 'text', value, onChange } = props
  return (
    <input 
      placeholder='Create TodoContext app...'
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}
