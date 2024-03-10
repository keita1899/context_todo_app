import React from 'react'
import { TodoProps } from '../types/todo'

export const Todo:React.FC<{ todo: TodoProps }> = ({todo}) => {
  
  return (
    <div>
      <div className="todo">
          <button className="complete-button">完了</button>
          <span className="todo-text">{todo.text}</span>
          <button className="edit-button">編集</button>
        </div>
    </div>
  )
}