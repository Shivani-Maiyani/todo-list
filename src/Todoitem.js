import { Link } from "react-router-dom";

function TodoItem({
  todo,
  onEditClick,
  onDeleteClick,
  onView
}) {
  return (
     <li key={todo.id}>
      <p className="text">{todo.text}</p>
      <button onClick={() => onEditClick(todo)} className="editbtn">Edit</button>
      <button onClick={() => onDeleteClick(todo.id)} className="editbtn deletbtn">Delete</button>
      <button onClick={() => onView(todo.id)} className="editbtn"><Link to="/Viewdata" className="editbtn link">View</Link></button>
    </li>
  
    
  );
}
export default TodoItem;