import React from 'react'
import { TodoProps } from '../types/todo'

type Props = {
  todo: TodoProps,
  onCompleteTodo: () => void,
  onToggleEditTodo: () => void,
}

export const Todo:React.VFC<Props> = ({todo, onCompleteTodo, onToggleEditTodo}) => {

  return (
    <div className="todo">
      <button className="complete-button" onClick={onCompleteTodo}>完了</button>
      <span className="todo-text">{todo.text}</span>
      <button className="edit-button" onClick={onToggleEditTodo}>編集</button>
    </div>
  )
}