import * as React from 'react'
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'

export function generateTodoStatus(counter: number) {
	if (counter > 9) return '* I can\'t believe it, congratulations'
	if (counter > 4) return '* impressive, did you completed all these tasks?'
	return ''
}

export function generateDoneStatus(counter: number) {
	if (counter > 9) return '* see you next year'
	if (counter > 6) return '* I\'m kinda alone here you know'
	if (counter > 2) return '* you\'re going to complete some tasks, right?'
	return ''
}

type Task = {
	id: string
	description: string
	completed: boolean
}

type TaskActions =
	| { type: 'ADD'; description: string }
	| { type: 'DONE'; id: string }
	| { type: 'UNDO'; id: string }
	| { type: 'DELETE'; id: string }
  | { type: 'RESET' }
	| { type: 'CLEAR' }

const initialState: Task[] = []

function taskReducer(
	state: typeof initialState = initialState,
	action: TaskActions,
) {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{
					id: `${Math.random().toString(36).substr(2, 9)}`,
					description: action.description,
					completed: false,
				},
			]

		case 'DONE':
			return state.map((
				task,
			) => (task.id === action.id ? { ...task, completed: true } : task))

		case 'UNDO':
			return state.map((
				task,
			) => (task.id === action.id ? { ...task, completed: false } : task))

    case 'RESET':
      return [] 

		case 'DELETE':
			return state.filter((task) => task.id !== action.id)

		case 'CLEAR':
			return state.filter((task) => !task.completed)

		default:
			throw new Error(`Unhandled action type: ${action}`)
	}
}

type TaskContextType = [Task[], React.Dispatch<TaskActions>] | undefined
const TaskContext = React.createContext<TaskContextType>(undefined)
TaskContext.displayName = 'TaskContext'

type TaskProviderProps = {
	children: React.ReactNode
}
export function TaskProvider(props: TaskProviderProps) {
	const { children } = props
	const [tasks, dispatch] = useLocalStorageReducer(
		'another-todo-list:tasks',
		taskReducer,
		initialState,
	)

	return (
		<TaskContext.Provider value={[tasks, dispatch]}>
			{children}
		</TaskContext.Provider>
	)
}

function useTasks() {
	const context = React.useContext(TaskContext)
	if (context === undefined) {
		throw new Error('useTasks must be used within a TaskProvider.')
	}
	return context
}

type TodoTaskActions = Exclude<
	TaskActions,
	{ type: 'UNDO' } | { type: 'CLEAR' }
>
export function useTodoTask() {
	const [tasks, dispatch] = useTasks()

	const todo = tasks.filter((task) => !task.completed)
	const done = tasks.filter((task) => task.completed)
	const status = generateTodoStatus(done.length)

	function todoDispatch(actions: TodoTaskActions) {
		return dispatch(actions)
	}

	return [{ status, tasks: todo }, todoDispatch] as const
}

type DoneTaskActions = Exclude<TaskActions, { type: 'ADD' } | { type: 'DONE' }>
export function useDoneTask() {
	const [tasks, dispatch] = useTasks()

	const done = tasks.filter((task) => task.completed)
	const todo = tasks.filter((task) => !task.completed)
	const status = generateDoneStatus(todo.length)

	function doneDispatch(actions: DoneTaskActions) {
		return dispatch(actions)
	}

	return [{ status, tasks: done }, doneDispatch] as const
}
