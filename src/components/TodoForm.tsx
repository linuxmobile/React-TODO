import {Input} from './Input'
import UseLocalStorage from '../hooks/useLocalStorage'
import { useDoneTask, useTodoTask } from '../context/taskContext'

const generatePlaceholder = (todoCount: number, doneCount: number) => {
  if (doneCount > 7 && todoCount === 0) return 'great job!'
  if (doneCount > 4 && todoCount < 3) return 'keep going!'
  if (doneCount > 1 && todoCount < 5) return 'can be better!'
  if (todoCount > 9) return "i don't even care anymore"
  if (todoCount > 6) return 'ok, keep going...'
  if (todoCount > 4) return 'are you sure?'
  if (todoCount > 2) return 'more tasks?'
  return 'ok, add some task here...'
}

type TodoFormProps = {
  onSubmit: (description: string) => void
}

export function TodoForm (props: TodoFormProps) {
  const { onSubmit } = props
  const [input, setInput] = UseLocalStorage('ReactTodo:input', '')
  const todo = useTodoTask()
  const done = useDoneTask()
  const todoLength = todo.tasks ? todo.tasks.length : 0
  const doneLength = done.tasks ? done.tasks.length : 0
  const placeholder = generatePlaceholder(todoLength, doneLength)

  const handleInputChange = (description: string) => {
    setInput(description)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, description: string) => {
    e.preventDefault()
    onSubmit(description)
    setInput('')
  }
  return (
    <form onSubmit={(e) => handleSubmit(e, input)}> 
      <label htmlFor='newTask'>New Task</label>
      <Input 
        id='newTask'
        name='newTask'
        type='text'
        value={input}
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e.currentTarget.value)}
      />
    </form>
  )
}
