import { useTodoTask } from '../context/taskContext'
import {
  Text, Stack, Task, IconButton, DeleteIcon,
} from '../components'
import TodoForm from './TodoForm'

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
			<Stack>
				{todo.tasks.map((task) => (
					<Task
						key={task.id}
						id={task.id}
						checked={task.completed}
						description={task.description}
						onCheckedChange={handleDoneTask}
					>
						<IconButton
							aria-label={`Delete ${task.description}`}
							title='Delete'
							onClick={() => handleDeleteTask(task.id)}
						>
							<DeleteIcon />
						</IconButton>
					</Task>
				))}
        {todo.tasks.length === 0 && (
          <li>
            <Text>{todo.status}</Text>
          </li>
        )}
			</Stack>
			<TodoForm onSubmit={handleAddTask} />
		</div>
	)
}
