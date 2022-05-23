function AddTodoForm({
    todo,
    onAddFormSubmit,
    onAddInputChange
  }) {
    return (
       
        <form onSubmit={onAddFormSubmit}>
        <h2 className="title">Add Todo</h2>
        <div className="form">
        <input
          className="form-control"
          name="todo"
          type="text"
          placeholder="Create new todo"
          value={todo}
          onChange={onAddInputChange}
        />
        <button type="submit" onClick={onAddFormSubmit} className="btn">Add</button>
        </div>
        
      </form>
    
      
    );
  }
  export default AddTodoForm;