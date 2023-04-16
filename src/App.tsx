import { TaskProvider } from './context/taskContext'
import {TodoForm} from './components/TodoForm'

function App() {
	return (
		<TaskProvider>
      <h1>TodoList w/ Typescript, React & Tailwindcss</h1>
      <TodoForm />
		</TaskProvider>
	)
}

export default App
