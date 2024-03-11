import React from 'react'
import { TodoProps } from '../types/todo'
import { EditTodoForm } from './EditTodoForm'

type Props = {
  todo: TodoProps,
  onToggleEditTodo: () => void,
  onSaveTodo: (updateTodoText: string) => void 
}

export const Todo:React.VFC<Props> = ({todo, onToggleEditTodo, onSaveTodo}) => {

  return (
    <div>
      {!todo.isEdit && 
        <div className="todo">
          <button className="complete-button">完了</button>
          <span className="todo-text">{todo.text}</span>
          <button className="edit-button" onClick={onToggleEditTodo}>編集</button>
        </div>
      }
      {todo.isEdit && 
        <EditTodoForm todoText={todo.text} onToggleEditTodo={onToggleEditTodo} onSaveTodo={onSaveTodo} />
      }
    </div>
  )
}