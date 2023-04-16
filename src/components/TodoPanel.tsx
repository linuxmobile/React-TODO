import { useTodoTask } from '../context/taskContext'
import { TodoForm } from './TodoForm'

export default function TodoPanel() {
  const [todo, dispatch] = useTodoTask()

  function handleDoneTask(id: string) {
    dispatch({ type: 'DONE', id })
  }
  function handleAddTask(description: string) {
    dispatch({ type: 'ADD', description })
  }
  function handleDeleteTask(id: string) {
    dispatch({ type: 'DELETE', id })
  }

  return (
    <div>
      <TodoForm onSubmit={handleAddTask} />
    </div>
  )
}
