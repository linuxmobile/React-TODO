import { useDoneTask } from '../context/taskContext'
import {
	Button,
	DeleteIcon,
	IconButton,
	Stack,
	Task,
	Text,
} from '../components'

export default function PanelDone() {
	const [done, dispatch] = useDoneTask()

	function handleUndoTask(id: string) {
		dispatch({ type: 'UNDO', id })
	}

	function handleDeleteTask(id: string) {
		dispatch({ type: 'DELETE', id })
	}

	function handleClearTasks() {
		dispatch({ type: 'CLEAR' })
	}

	return (
		<div className='grid content-end gap-4 auto-rows-min'>
			<div>
				<Stack aria-label='done tasks'>
					{done.tasks.map((task) => (
						<Task
							key={task.id}
							id={task.id}
							checked={task.completed}
							description={task.description}
							onCheckedChange={handleUndoTask}
						>
							<IconButton
								title='delete task'
								aria-label={`delete task ${task.description}`}
								onClick={() => handleDeleteTask(task.id)}
							>
								<DeleteIcon />
							</IconButton>
						</Task>
					))}
					{done.tasks.length === 0 && (
						<li className='text-center'>
							<Text variant='sub'>{done.status}</Text>
						</li>
					)}
				</Stack>
			</div>
			<div className='flex justify-end'>
				<Button
					type='button'
					title='clear finish tasks'
					onClick={handleClearTasks}
				>
					clear
				</Button>
			</div>
		</div>
	)
}
