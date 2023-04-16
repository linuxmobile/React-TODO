import { TaskProvider } from './context/taskContext'
import Panel from './components/Panel'

function App() {
	return (
		<TaskProvider>
      <h1>TodoList w/ Typescript, React & Tailwindcss</h1>
      <Panel />
		</TaskProvider>
	)
}

export default App
