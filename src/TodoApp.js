import React from 'react';
import { useEffect, useState } from "react";
import TodoItem from './Todoitem';
import AddTodoForm from './AddForm';
import EditForm from './EditForm';

function TodoApp(){

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
          return JSON.parse(savedTodos);
        } else {
          return [];
        }
      });
      const [todo, setTodo] = useState("");
      const [viewtodo,setViewtodo] = useState(false);
      const [isEditing, setIsEditing] = useState(false);
      const [currentTodo, setCurrentTodo] = useState({});
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log("hiiii");
      }, [todos]);
    
      
      function handleEditInputChange(e) {
        setCurrentTodo({ ...currentTodo,text: e.target.value });
        console.log(currentTodo);
      }
    function  handleAddInputChange(e){
        e.preventDefault();
        setTodo(e.target.value);
    }
    
      function handleAddFormSubmit(e) {
        e.preventDefault();
       
        if (todo !== "") {
          setTodos([
            ...todos,
            {
              id:new Date(),
              text: todo.trim()
            }
          ]);
          
          
        }
        setTodo("");
        }
        
      function handleDeleteClick(id) {
        const removeItem = todos.filter((todo) => {
          return todo.id !== id;
        });
        setTodos(removeItem);
      }
    
      function handleEditFormSubmit(e) {
        e.preventDefault();
        handleUpdateTodo(currentTodo.id, currentTodo);
      }
    
      function handleUpdateTodo(id, updatedTodo) {
        const updatedItem = todos.map((todo) => {
          return todo.id === id ? updatedTodo : todo;
        });
        setIsEditing(false);
        setTodos(updatedItem);
      }
      function handleEditClick(todo) {
        setIsEditing(true);
        setCurrentTodo({ ...todo });
      }
      function handleViewData(){
        handleView(currentTodo.id, currentTodo);   
      }    
      function handleView(id,viewtodo){
        const View = todos.map((todo) =>{
         
          return todo.id === id ? viewtodo : todo;
        })
        console.log(View);  
        setViewtodo(false);
        setTodo({...View});

        localStorage.setItem('data',JSON.stringify(View));
      
      }
      
      return (
        <div className="App">
      
      {isEditing ? (
            <EditForm
              currentTodo={currentTodo}
              setIsEditing={setIsEditing}
              onEditInputChange={handleEditInputChange}
              onEditFormSubmit={handleEditFormSubmit}
            />
          ) : (
            <AddTodoForm
              todo={todo}
              onAddInputChange={handleAddInputChange}
              onAddFormSubmit={handleAddFormSubmit}
            />
          )}
          
    
          <ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem
                todo={todo}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
                onView = {handleViewData}
              />
            ))}
          </ul>
        </div>
      );
}
export default TodoApp;