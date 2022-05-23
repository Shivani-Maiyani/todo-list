function EditForm({
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
  }) {
    return (
      <form onSubmit={onEditFormSubmit}>
        <h2 className="title">Edit Todo</h2>
        <div className="form">
        <input
          className="form-control"
          name="updateTodo"
          type="text"
          placeholder="Update todo"
          value={currentTodo.text}
          onChange={onEditInputChange}
        />
        <button type="submit" onClick={onEditFormSubmit} className="btn">
          Update
        </button>
        <button onClick={() => setIsEditing(false)} className="btn">Cancel</button>
        </div>
      </form>
    );
  }
  export default EditForm;