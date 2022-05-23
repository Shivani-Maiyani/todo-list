function TodoItem({
  todo,
  onEditClick,
  onDeleteClick
}) {
  return (
     <li key={todo.id}>
      <p className="text">{todo.text}</p>
      <button onClick={() => onEditClick(todo)} className="editbtn">Edit</button>
      <button onClick={() => onDeleteClick(todo.id)} className="editbtn deletbtn">Delete</button>
    </li>
  
    
  );
}
export default TodoItem;