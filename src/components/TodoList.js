import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.test)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)
      setTodos(removeArr);
    }

    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
      });
      setTodos(updatedTodos);
    }

  return (
    <div><h1>what's the plan for today?</h1>
    <TodoForm onsubmit={addTodo}  />
    <Todo todos={todos}
    completeTodo={completeTodo}
    removeTodo={removeTodo}/>
    
    </div>
  )
}

export default TodoList