import { TaskProvider } from './context/taskContext'
import Panel from './components/Panel'

function App() {
	return (
		<main className='grid h-screen place-items-center'>
			<TaskProvider>
				<h1>TodoList w/ Typescript, React & Tailwindcss</h1>
				<Panel />
			</TaskProvider>
		</main>
	)
}

export default App
