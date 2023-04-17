import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button'
import TodoPanel from './TodoPanel'
import TodoForm from './TodoForm'

type View = 'todo' | 'done'

export default function Panel() {
	const [view, setView] = React.useState<View>('todo')

	const handleChangeView = () => {
		setView((prev) => (prev === 'todo' ? 'done' : 'todo'))
	}

	return (
		<>
			<motion.div className='relative grid content-end w-full h-full max-w-4xl grid-cols-2 gap-8 px-8 overflow-hidden sm:overflow-visible sm:max-h-96 sm:grid-cols-2 sm:auto-cols-min sm:static'>
				<AnimatePresence>
					<motion.div
						className='grid w-full h-full bottom-20'
						key='left'
						initial={{ x: view === 'todo' ? 0 : '-100vh' }}
						animate={{ x: view === 'todo' ? 0 : '-100vh' }}
						exit={{ x: '-100vh' }}
						transition={{
							type: 'spring',
							stiffness: 150,
							damping: 15,
						}}
					>
						<TodoPanel />
					</motion.div>
					<motion.div
						className='grid w-full h-full bottom-20'
						key='right'
						initial={{ x: view === 'done' ? 0 : '100vh' }}
						animate={{ x: view === 'done' ? 0 : '100vh' }}
						exit={{ x: '100vh' }}
						transition={{
							type: 'spring',
							stiffness: 150,
							damping: 15,
						}}
					>
						<TodoForm />
					</motion.div>
				</AnimatePresence>
			</motion.div>
			<Button
				className='fixed flex justify-end w-full px-8 bottom-6'
				title={`Change to ${view === 'todo' ? 'Done' : 'Todo'} view`}
				type='button'
				onClick={handleChangeView}
			>
				{view === 'todo' ? 'Done' : 'Todo'}
			</Button>
		</>
	)
}
