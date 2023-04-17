import * as React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button'
import TodoPanel from './TodoPanel'
import TodoDone from './TodoDone'

type View = 'todo' | 'done'

export default function Panel() {
	const [view, setView] = React.useState<View>('todo')
	const isMobile = useMediaQuery('sm')

	function handleChangeView() {
		setView((prev) => (prev === 'todo' ? 'done' : 'todo'))
	}

	return (
		<>
			<motion.div className='relative grid content-end w-full h-full max-w-4xl grid-cols-2 gap-8 px-8 overflow-hidden sm:overflow-visible sm:max-h-96 sm:grid-cols-2 sm:auto-cols-min sm:static'>
				<AnimatePresence>
					<motion.div
						key='left'
						className={`${
							isMobile ? 'absolute px-8' : ''
						} grid w-full h-full bottom-20`}
						initial={isMobile ? { x: view === 'todo' ? 0 : '-100vw' } : {}}
						animate={isMobile ? { x: view === 'todo' ? 0 : '-100vw' } : {}}
						exit={isMobile ? { x: '-100vw' } : {}}
						transition={{
							type: 'spring',
							stiffness: 150,
							damping: 15,
						}}
					>
						<TodoPanel />
					</motion.div>
					<motion.div
						key='right'
						className={`${
							isMobile ? 'absolute px-8' : ''
						} grid w-full h-full bottom-20`}
						initial={isMobile ? { x: '100vw' } : {}}
						animate={isMobile ? { x: view === 'done' ? 0 : '100vw' } : {}}
						exit={isMobile ? { x: '100vw' } : {}}
						transition={{
							type: 'spring',
							stiffness: 150,
							damping: 15,
						}}
					>
						<TodoDone />
					</motion.div>
				</AnimatePresence>
			</motion.div>
			{isMobile && (
				<div className='fixed flex justify-end w-full px-8 bottom-6'>
					<Button
						title={`change to ${view === 'todo' ? 'done' : 'todo'} view`}
						type='button'
						onClick={handleChangeView}
					>
						{view === 'done' ? 'todo' : 'done'}
					</Button>
				</div>
			)}
		</>
	)
}
