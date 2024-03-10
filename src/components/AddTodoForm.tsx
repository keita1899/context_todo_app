import { useState } from "react"

type Props = {
  disabled: boolean,
  onAddTodo: (todoText: string) => void,
}

export const AddTodoForm: React.FC<Props> = ({onAddTodo, disabled}) => {
  
  const [todoText, setTodoText] = useState('')

  const handleClick = (): void => {
    if (todoText.trim()) {
      onAddTodo(todoText)
      setTodoText('')
    }
  }
  
  return (
    <>
      <div className="add-todo-form">
        <input type="text" className="add-todo-input" onChange={(e) => setTodoText(e.target.value)} value={todoText} />
        <button className="add-button" onClick={handleClick} disabled={disabled}>保存</button>
      </div>
    </>
  )
}