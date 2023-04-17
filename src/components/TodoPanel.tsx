import { motion } from 'framer-motion'
import { useTodoTask } from '../context/taskContext'
import { DeleteIcon, IconButton, Stack, Task, Text } from '../components'
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
		<div className='grid content-end gap-4 auto-rows-min'>
			<motion.div
				layout
				className={`${
					todo.tasks.length || todo.status ? 'py-7' : 'py-0'
				} px-5 bg-white rounded-lg shadow-md max-h-80`}
			>
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
						<li className='text-center'>
							<Text variant='sub'>{todo.status}</Text>
						</li>
					)}
				</Stack>
			</motion.div>
			<TodoForm onSubmit={handleAddTask} />
		</div>
	)
}
