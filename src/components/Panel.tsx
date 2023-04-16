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
    <motion.div>
        <AnimatePresence>
          <motion.div
            key='left'
            initial={{ x: view === 'todo' ? 0 : '-100vh' }}
            animate={{ x: view === 'todo' ? 0 : '-100vh' }}
            exit={{ x: '-100vh' }}
            transition= {{
              type: 'spring',
              stiffness: 150,
              damping: 15,
            }}
          >
            <TodoPanel />
          </motion.div>
          <motion.div
            key='right'
            initial={{ x: view === 'done' ? 0 : '100vh' }}
            animate={{ x: view === 'done' ? 0 : '100vh' }}
            exit={{ x: '100vh' }}
            transition= {{
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
        title={`Change to ${view === 'todo' ? 'Done' : 'Todo'} view`}
        type='button'
        onClick={handleChangeView}>
        {view === 'todo' ? 'Done' : 'Todo'}
      </Button>
    </>
  )
}
