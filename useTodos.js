import React, { useEffect, useReducer } from 'react'
import { TodoReducer } from '../08-useReducer/TodoReducer';

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(TodoReducer, initialState, init );


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ));
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    const action = {
        type: '[TODO] Add Todo',
        payload: todo
    } 

    dispatch(action);
  }

  const handleDeleteTodo = (id) => {  
    dispatch({
        type: '[TODO] Remove Todo',
        payload: id
    });

  }

  const handleToggleTodo = (id) => {  
    // console.log('Condicion completada')
    dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
    });

  }
  return { 
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=> !todo.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  }
}
