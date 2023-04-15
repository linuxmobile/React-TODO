import {Input} from './Input'

export const TodoForm = () => {
  return (
    <form>
      <Input 
        id='newTask'
        name='newTask'
        type='text'
        placeholder='Create TodoContext app...'
      />
    </form>
  )
}
