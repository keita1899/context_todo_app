import React, { useState } from 'react'

type Props = {
  todoText: string,
  onToggleEditTodo: () => void,
  onSaveTodo: (updateTodoText: string) => void
}

export const EditTodoForm:React.VFC<Props> = ({todoText, onToggleEditTodo, onSaveTodo}) => {
  const initialTodoText = todoText

  const [updateTodoText, setUpdateTodoText] = useState<string>(initialTodoText)

  const handleSaveTodo = (): void => {
    if (updateTodoText.trim()) {
      onSaveTodo(updateTodoText)
    }
  }
  
  return (
    <div className="edit-todo-form">
      <input type="text" className="edit-todo-input" onChange={(e) => setUpdateTodoText(e.target.value)} value={updateTodoText} />
      <button className="save-button" onClick={handleSaveTodo}>更新</button>
      <button className="return-button" onClick={onToggleEditTodo}>戻す</button>
    </div>
  )
}