import * as React from 'react'
import Button from './Button'
import TodoPanel from './TodoPanel'
import TodoForm from './TodoForm'

type View = 'todo' | 'done'

export default function Panel() {
  const [view, setView] = React.useState<View>('todo')

  const handleChangeView = () => {
    setView((prev) => (prev === 'todo' ? 'done' : 'todo'))
  }

  return (
    <div>
      <TodoPanel />
      <TodoForm />
    </div>
  )
}
