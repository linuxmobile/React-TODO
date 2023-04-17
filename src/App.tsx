import { TaskProvider } from './context/taskContext'
import Panel from './components/Panel'

function App() {
	return (
		<main className='grid h-screen place-items-center'>
			<TaskProvider>
				<Panel />
			</TaskProvider>
		</main>
	)
}

export default App
